import json
from pprint import pprint

import requests

url = "https://fcm.googleapis.com/fcm/send"
message = "Today only! Discount on all orders after 6pm!!"

with open('restodemo-lucas-export.json') as f:
    data = json.load(f)

index = 0

for id in data["fcmTokens"]:
    to = data["fcmTokens"][id]
    #to = "dgT0mzscuMM:APA91bGH7sliMGpL0m5HB5n3XM9TTZpk_tRBpnSJZszjb7SKKDheLLHySl5qco5KuMVfRH0h0HDRNvLW4Owo1rx3dF-qPnmQ7kOMy2UEGmU8wyD-MUoC9lV2zwOLjrUPJEJA_f970BgR"
    
    payload = "{\n    \"notification\": {\n        \"title\": \"Restodemo\",\n        \"body\": \""+ message +"\",\n        \"click_action\": \"https://test-2d7c7.firebaseapp.com/\",\n        \"icon\": \"https://test-2d7c7.firebaseapp.com/assets/icons/android-icon-144x144.png\"\n    },\n    \"to\": \"" + to + "\",\n    \"collapse_key\":\"type_a\",\n    \"data\" : {\n     \"body\" : \"Hey Lucas\",\n     \"title\": \"Title of Your Notification in Title\",\n     \n\t}\n}"
    headers = {
        'Authorization': "key=AAAALFAGDEs:APA91bEACwdhcPVD6D7rLZXKRV_i-xtEg41YcOqqQvDWf_jhHF_cEaXZpxi5e5_qjf8W_S2S4RwxIuwdeHkybPIP5lGSol2OQZ8A6hy3i-E7fK5INC_8qcy_DoyMjxvQta5w8s1kC-Km",
        'Content-Type': "application/json",
        'cache-control': "no-cache",
        'Postman-Token': "63bb2fdf-f7be-4ad9-afa1-735974042bdb"
        }

    response = requests.request("POST", url, data=payload, headers=headers)
    index++
print("There are a total of " + str(idex))