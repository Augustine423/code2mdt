package com.example.drone.config;

import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class TelemetryS3AppenderV1 {

    private final AmazonConfig s3;
    private final String bucketName;
    private final ObjectMapper mapper = new ObjectMapper();

    public TelemetryS3AppenderV1(AmazonConfig s3, ConfigEnv configEnv) {
        this.s3 = s3;

        this.bucketName = configEnv.getBucketName();
    }

    public void appendToS3Log(List<?> telemetryList, String gcsIp, String sysId) {
        try {
            // Ensure sysId is valid and gcsIp is non-null
            if (gcsIp == null || gcsIp.isEmpty()) {
                gcsIp = "Unknown"; // Default value if GCS_IP is missing
            }

            // Create filename and key with proper formatting
            String fileName = String.format("Received_%s_GCSIP_%s_SYSID_t.log", gcsIp, sysId); // Ensure sysId is valid
            String s3Key = "telemetry-logs/" + fileName;

            // Temp file for appending
            Path tempFile = Files.createTempFile("telemetry-", ".log");

            // Check if object exists and append
            if (s3.getAmazonS3().doesObjectExist(bucketName, s3Key)) {
                S3Object s3Object = s3.getAmazonS3().getObject(bucketName, s3Key);
                try (InputStream inputStream = s3Object.getObjectContent()) {
                    Files.copy(inputStream, tempFile, StandardCopyOption.REPLACE_EXISTING);
                }
            }

            // Append telemetry data as log line
            String json = mapper.writeValueAsString(telemetryList);
            String logLine = "[" + LocalDateTime.now() + "] " + json + System.lineSeparator();
            Files.writeString(tempFile, logLine, StandardOpenOption.APPEND);

            // Upload the log back to S3
            s3.getAmazonS3().putObject(new PutObjectRequest(bucketName, s3Key, tempFile.toFile()));

            // Clean up temporary file
            Files.deleteIfExists(tempFile);
            System.out.println("✅ Appended telemetry data to: " + s3Key);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}