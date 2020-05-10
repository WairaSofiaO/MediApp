package com.bluetoothapp;

import android.content.Intent;

import android.os.Bundle;
import androidx.annotation.NonNull;
import com.estimote.coresdk.recognition.packets.Beacon;
import com.estimote.coresdk.service.BeaconManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.List;

public class EstimoteModuleApplication extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;
    private BeaconManager beaconManager;

//    public Intent intent;

    //Retorna EstimotePlugin para que podamos acceder a él a través de React.NativeModules.EstimotePlugin en JavaScript.
    @NonNull
    @Override
    public String getName() {
        return "EstimotePlugin";
    }

    EstimoteModuleApplication(ReactApplicationContext context) {
        super(context);
        reactContext = context;


        //---------- Beacon Process  ----------- //
        /*  beaconManager = new BeaconManager(getApplicationContext());

        beaconManager.connect(new BeaconManager.ServiceReadyCallback() {
            @Override
            public void onServiceReady() {
                beaconManager.startMonitoring(new BeaconRegion(
                        "monitored region",
                        null,
                        null, null));
            }
        });
        beaconManager.setMonitoringListener(new BeaconManager.BeaconMonitoringListener() {
            @Override
            public void onEnteredRegion(BeaconRegion region, List<Beacon> beacons) {
                String myBeacons= beacons.toString();
                Log.d("Lista ", myBeacons);
                showNotification(
                        myBeacons,
                        "Encontrado");
            }
            @Override
            public void onExitedRegion(BeaconRegion region) {
                // could add an "exit" notification too if you want (-:
                showNotification(
                        "Situacion:",
                        "Fuera de rango");
            }
        });

         */
    }
        /*
    @ReactMethod

    public void myConnect(){
        beaconManager.connect(() -> beaconManager.startMonitoring(new BeaconRegion(
                "monitored region",
                null,
                null, null)));
    }

    @ReactMethod
    public void mySetMonitoringListener(){
        beaconManager.setMonitoringListener(new BeaconManager.BeaconMonitoringListener() {
            @Override
            public void onEnteredRegion(BeaconRegion region, List<Beacon> beacons) {
                String myBeacons = beacons.toString();
                Log.d("Lista ", myBeacons);
                showNotification(myBeacons,"Encontrado");
            }

            @Override
            public void onExitedRegion(BeaconRegion beaconRegion) {
                showNotification("Situacion:","Fuera de rango");
            }
        });
    }

    @ReactMethod
    public void showNotification(String title, String message) {
        Intent notifyIntent = new Intent(reactContext, MainActivity.class);
        notifyIntent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent pendingIntent = PendingIntent.getActivities(reactContext, 0,
                new Intent[] { notifyIntent }, PendingIntent.FLAG_UPDATE_CURRENT);
        Notification notification = new Notification.Builder(reactContext)
                .setSmallIcon(android.R.drawable.ic_dialog_info)
                .setContentTitle(title)
                .setContentText(message)
                .setAutoCancel(true)
                .setContentIntent(pendingIntent)
                .build();
        notification.defaults |= Notification.DEFAULT_SOUND;
        NotificationManager notificationManager =
                (NotificationManager) reactContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(1, notification);
    }
    */

    @ReactMethod
    public String returnBeaconList(){
        /*
        String parametros = Intent.parseUri().getStringExtra();
       if (parametros !=null) {
            //Se recibe el dato rusuario con getIntent en otra variable propia del Main2Activity
            String dummy = intent.getStringExtra("dummy");
            //txtusuario es el id del edit text en el Activity main que se le manda la variable usuario
            return dummy;
        } else{
            return "no string";
        }


 */
        BeaconListModel beaconListModel = new BeaconListModel();
        List<Beacon> listBeacons = beaconListModel.getListBeacons();

        return listBeacons.toString();

        //String mylistBeacons = intent.getStringExtra("listBeacons");

        //Uri uri = intent.getParcelableExtra("imageUri");
        //return "uri";

        //Uri myUri = Uri.parse(extras.getString("imageUri"));
        //String LISTA = intent.getStringExtra("listBeacons");
        /*
        Bundle parametros = getExtras();
        if(parametros != null){
            String listBeacons = parametros.getString("listBeacons");
            return listBeacons;
        }else{
            return "Vacio";
        }

          */
        //ArrayList<String> listBeacons = intent.getStringArrayListExtra("listBeacons");
        //ArrayList<Parcelable> mylistBeacons = intent.getParcelableArrayListExtra("listBeacons");
        //ArrayList<String> listBeacons;
        //listBeacons = intent.getStringArrayListExtra("listBeacons"); //Dentro estará "contenido"

    }
        /*
    @Override
    @ReactMethod
    public Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();
        //ArrayList<String> listBeacons = intent.getStringArrayListExtra("listBeacons");
        ArrayList<String> LISTA = new ArrayList<>();
        constants.put("LISTA", intent.getStringArrayListExtra("listBeacons"));

        return constants;
    }

 */

}

