package com.example.drone.config;

import io.github.cdimascio.dotenv.Dotenv;
import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
@Component
public class ConfigEnv {

    // Getters
    private final String accessKey;
    private final String secretKey;
    private final String region;
    private final String bucketName;


    // Constructor to load values from the .env file
    public ConfigEnv() {

        try {
            Dotenv dotenv = Dotenv.configure().directory("/Users/ngasa/Developer/telemetry-v02/Backend/src/main/resources/.env").load();


            // Get values from .env file
            this.accessKey = dotenv.get("AWS_ACCESS_KEY_ID");
            this.secretKey = dotenv.get("AWS_SECRET_ACCESS_KEY");
            this.region = dotenv.get("AWS_REGION");
            this.bucketName=dotenv.get("BUCKET_NAME");

            // Log the values (for debugging purposes)
            System.out.println("AWS Access Key: " + accessKey);
            System.out.println("AWS Secret Key: " + secretKey);
            System.out.println("AWS Region: " + region);
            System.out.println("Bucket Name: "+ bucketName);


            // Check if any value is null and throw an exception if any are missing
            if (accessKey == null || secretKey == null || region == null) {
                throw new IllegalArgumentException("AWS credentials or region are missing in .env file.");
            }

        } catch (Exception e) {
            System.err.println("Error loading environment variables: " + e.getMessage());
            throw new RuntimeException("Failed to load AWS configuration from .env file", e);
        }
    }

}
