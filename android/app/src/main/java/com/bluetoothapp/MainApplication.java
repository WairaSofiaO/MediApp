package com.bluetoothapp;

import android.app.Application;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Parcelable;
import com.bluetoothapp.EstimoteModulePackage;

import android.util.Log;
import com.facebook.react.*;
import com.facebook.react.PackageList;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.estimote.coresdk.common.requirements.SystemRequirementsChecker;
import com.estimote.coresdk.observation.region.beacon.BeaconRegion;
import com.estimote.coresdk.recognition.packets.Beacon;
import com.estimote.coresdk.service.BeaconManager;
import com.google.gson.Gson;

import static com.estimote.coresdk.common.config.EstimoteSDK.getApplicationContext;

public class MainApplication extends Application implements ReactApplication {
  
  private BeaconManager beaconManager;
  private Beacon mybeacon;
  public BeaconListModel listModel;


  //public Intent listIntent = new Intent(this, EstimoteModuleApplication.class);

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
           //packages.add(new EstimoteModulePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };


    @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());

    beaconManager = new BeaconManager(getApplicationContext());
    // add this below:
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
            listModel.setListBeacons(beacons);

            /*
            Intent i = new Intent(MainApplication.this, EstimoteModuleApplication.class);
            String myString ="Pinche lista";
            i.putExtra("dummy", myString);
            startActivity(i);
// Bundle bundle= i.getExtras(); // (not null anymore)
             */

            /*pasar a la segunda actividad Main2Activity
            String eusuario = beacons.toString(); //Variable que yo voy a mandar a la otra actividad
            Intent conectado = new Intent(MainApplication.this,EstimoteModuleApplication.class);

            conectado.putExtra("rusuario",eusuario); //El metodo PutExtra manda la variable eusuario y la recibe la variable rusuario
            startActivity(conectado); //Esto Lounchea la actividad Main2Activity
            */

            //listIntent.putExtra("imageUri", beacons.toString());

            //listIntent.putExtra("imageUri", beacons.toString());
            /*
            String stringList = beacons.toString();
            Intent sendIntent = new Intent();
            sendIntent.setAction(Intent.ACTION_SEND);
            sendIntent.putExtra(Intent.EXTRA_TEXT, stringList);
            sendIntent.setType("text/plain");

            */

            //Object arrayList = beacons.toArray();

            //Intent i= new Intent(getApplicationContext(),EstimoteModuleApplication.class);
            //i.putExtra("listBeacons", stringList);

            //i.putParcelableArrayListExtra("listBeacons", (ArrayList<? extends Parcelable>) beacons);
            //i.putParcelableArrayListExtra("listBeacons", (ArrayList<? extends Parcelable>) arrayList);
            String myBeacons= beacons.toString();
            //returnBeacons(beacons);
            showNotification("Beacons",myBeacons);
        }
        @Override
        public void onExitedRegion(BeaconRegion region) {
            // could add an "exit" notification too if you want (-:
            showNotification(
                    "Situacion:","Fuera de rango");
        }
    });

  }
  /*
    public void returnBeacons(List listBeacons){
     Bundle bundle = new Bundle();
    String listBeaconsString = "";
    bundle.putString(listBeaconsString,listBeacons.toString());
    Intent listIntent = new Intent(this, EstimoteModuleApplication.class);
    listIntent.putExtras(bundle);

    Intent i= new Intent();
    i.putStringArrayListExtra("listBeacons", (ArrayList<String>) listBeacons);
    //i.putExtra("listBeacons", listBeacons.toArray());

    // el arraylist tiene valor

    }
    */
  public void showNotification(String title, String message) {
    Intent notifyIntent = new Intent(this, MainActivity.class);
    notifyIntent.setFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
    PendingIntent pendingIntent = PendingIntent.getActivities(this, 0,
            new Intent[] { notifyIntent }, PendingIntent.FLAG_UPDATE_CURRENT);

    Notification notification = new Notification.Builder(this)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle(title)
            .setContentText(message)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent)
            .build();
    notification.defaults |= Notification.DEFAULT_SOUND;
    NotificationManager notificationManager =
            (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
    notificationManager.notify(1, notification);
  }


  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.bluetoothapp.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
