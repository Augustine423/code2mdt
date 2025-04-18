#!/bin/bash
LOG_DIR="/home/ubuntu/code2mdt/logs"
S3_BUCKET="s3://teledata-log-bucket/logs/"
LOG_FILE="/home/ubuntu/code2mdt/logs/s3-upload.log"
export TZ="Asia/Seoul"
DATE=$(date +%Y-%m-%d\ %H:%M:%S)
log_message() {
    echo "[$DATE] $1" | tee -a "$LOG_FILE"
}
log_message "Script started. Checking $LOG_DIR for logs..."
if [ ! -d "$LOG_DIR" ]; then
    log_message "Error: $LOG_DIR does not exist"
    exit 1
fi
if ! command -v aws >/dev/null 2>&1; then
    log_message "Error: AWS CLI not found"
    exit 1
fi
log_message "Starting log upload..."
shopt -s nullglob
files_found=false
for log in "$LOG_DIR"/Received*.log; do
    files_found=true
    filename=$(basename "$log")
    log_message "Processing $log..."
    aws s3 cp "$log" "$S3_BUCKET" --sse AES256 >> "$LOG_FILE" 2>&1
    if [ $? -eq 0 ]; then
        if aws s3 ls "$S3_BUCKET$filename" >> "$LOG_FILE" 2>&1; then
            log_message "Uploaded and verified $log in $S3_BUCKET"
            rm -f "$log"
            if [ $? -eq 0 ]; then
                log_message "Deleted $log"
            else
                log_message "Failed to delete $log"
            fi
        else
            log_message "Upload succeeded but verification failed for $log"
        fi
    else
        log_message "Failed to upload $log"
    fi
done
if [ "$files_found" = false ]; then
    log_message "No Received*.log files found in $LOG_DIR"
fi
log_message "Log upload completed."
