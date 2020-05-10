package com.bluetoothapp;

import com.estimote.coresdk.recognition.packets.Beacon;

import java.util.List;

public class BeaconListModel {

    private List<Beacon> listBeacons;

    public List<Beacon> getListBeacons() {
        return listBeacons;
    }

    public void setListBeacons(List<Beacon> listBeacons) {
        this.listBeacons = listBeacons;
    }



}
