/**
 * Copyright © 2016-2019 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
package org.thingsboard.server.common.transport.adaptor;

import org.thingsboard.server.gen.transport.TransportProtos.PostAttributeMsg;
import org.thingsboard.server.gen.transport.TransportProtos.PostTelemetryMsg;

import com.google.gson.JsonSyntaxException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class BleGwStrConverter {
	private static final String CAN_T_PARSE_VALUE = "Can't parse value: ";
	private static final String DEVICE_PROPERTY = "device";
	private static boolean isTypeCastEnabled = true;
	private static int maxStringValueLength = 0;
	
    public static PostTelemetryMsg convertToTelemetryProto(String payload) {
        PostTelemetryMsg.Builder builder = PostTelemetryMsg.newBuilder();
        //-mA09E1A179456 -a06 -uFEEE180D -f006B72082A3D6702000000007A0105 -nPolar OH1 17945624 -f006B3F0070 -r40 -c37
        String[] ss= payload.split(" -");
        for (int i=0; i<ss.length; i++) {
        	//if (ss[i]
        	log.debug(ss[i]);
        }
        return builder.build();
    }
    
    public static PostAttributeMsg convertToAttributesProto(String payload) throws JsonSyntaxException {
        //if (jsonObject.isJsonObject()) {
            PostAttributeMsg.Builder result = PostAttributeMsg.newBuilder();
            //List<KeyValueProto> keyValueList = parseProtoValues(jsonObject.getAsJsonObject());
            //result.addAllKv(keyValueList);
            return result.build();
        //} else {
        //    throw new JsonSyntaxException(CAN_T_PARSE_VALUE + payload);
        //}
    }
}
