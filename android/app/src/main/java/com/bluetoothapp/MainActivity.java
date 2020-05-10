package com.bluetoothapp;

import android.os.Bundle;
import com.estimote.coresdk.common.requirements.SystemRequirementsChecker;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactMethod;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "bluetoothApp";
  }

  @Override
  protected void onResume() {
    super.onResume();

    SystemRequirementsChecker.checkWithDefaultDialogs(this);
  }
}
