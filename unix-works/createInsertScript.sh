#!/bin/bash

OUTPUT_FILE="insert_logs.sql"

>"$OUTPUT_FILE"

TABLE_NAME="sd_sync_autopay_log_tab"

for i in {1,3000}; do
client_id="test_client_id_$i"
syncReqDt=$(date -v -"$iS+"%Y-%m-%d %H:%M:%S)
if((i%2==0));then
status='Failure'
else
status='SUCCESS'
fi

echo "insert into sd_sync_autopay_log_tab(client_id, master_client_id, payGroupId, masterPayGroupCode, demoPayGroupCode, syncReqDt, status, statusDescription)\
values('$client_id','002', '00069c23-05e6-46c5-a3c5-176f26e379c8','1234', '1234', '$syncReqDt','$status', 'Some-description');" >> "$OUTPUT_FILE"
done

echo "Done adding insert scripts" 
