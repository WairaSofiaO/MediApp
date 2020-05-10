package com.bluetoothapp;

import android.app.Application;
import android.util.Log;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.estimote.coresdk.cloud.google.model.Beacons;
import com.estimote.coresdk.recognition.packets.Beacon;
import com.estimote.coresdk.service.BeaconManager;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ApiService  extends Application {
/*

    RequestQueue requestQueue = Volley.newRequestQueue(getApplicationContext());
    final int SIMPLE_REQUEST = 1;
    String url = "http://https://az-fn-beacon.azurewebsites.net/api/QueryBeaconFunction?code=Fb3JRSOM6Hc1oSWvOej3mtv2ZgqgNKQaPxEVXIOTyZbM8m3Vvc7cug==";

    private BeaconManager beaconManager;
    beaconManager = new BeaconManager(getApplicationContext());




    StringRequest postRequest = new StringRequest(Request.Method.POST, url,new Response.Listener<String>(){
                @Override
                public void onResponse(String response) {
                    // response
                    Log.d("Response", response);
                }
            }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    // error
                    Log.d("Error.Response", String.valueOf(error));
                }
            }
    ) {
        @Override
        protected Map<String, String> getParams() {
            Map<String, String>  params = new HashMap<String, String>();
            params.put("nombre", "valor");
            params.put("domain", "http://itsalif.info");

            return params;
        }
    };

 */
}
