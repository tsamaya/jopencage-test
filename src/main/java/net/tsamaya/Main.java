package net.tsamaya;

import com.opencagedata.jopencage.JOpenCageGeocoder;
import com.opencagedata.jopencage.model.JOpenCageForwardRequest;
import com.opencagedata.jopencage.model.JOpenCageResponse;
import com.opencagedata.jopencage.model.JOpenCageResult;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        String apiKey = System.getenv("OPENCAGE_API_KEY");
        if(apiKey == null ){
            System.out.println("Fail to read env var OPENCAGE_API_KEY");
            System.exit(1);
        }
        JOpenCageGeocoder jOpenCageGeocoder = new JOpenCageGeocoder(apiKey);
        JOpenCageForwardRequest request = new JOpenCageForwardRequest("Lyon");
        JOpenCageResponse response = jOpenCageGeocoder.forward(request);
        List<JOpenCageResult> results = response.getResults();
        if (results != null) {
            results.forEach(result -> {
                System.out.println((result.getFormatted()));
            });
        }

    }
}