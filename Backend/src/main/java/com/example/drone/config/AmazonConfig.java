package com.example.drone.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component  // Makes this a Spring-managed bean
public class AmazonConfig {

    private final ConfigEnv configEnv;

    // Injecting ConfigEnv into AmazonS3Config
    @Autowired
    public AmazonConfig(ConfigEnv configEnv) {
        this.configEnv = configEnv;
    }

    // Create and return the AmazonS3 client
    public AmazonS3 getAmazonS3() {
        AWSCredentials credentials = new BasicAWSCredentials(configEnv.getAccessKey(), configEnv.getSecretKey());

        return AmazonS3ClientBuilder
                .standard()
                .withRegion(configEnv.getRegion())
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .build();
    }
}
