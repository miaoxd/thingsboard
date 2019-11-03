package org.thingsboard.server.common.transport.adaptor;

import org.thingsboard.server.gen.transport.TransportProtos.PostTelemetryMsg;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class BleGwStrConverter {
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
}
