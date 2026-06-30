'use strict';

const Homey = require('homey');

module.exports = class HoymilesDTUDriver extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('Hoymiles DTU Driver initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device
   * and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {

    return [{
      name: 'Hoymiles DTU',
      data: {
        id: 'hoymiles-dtu',
      },
    }];

  }

};
