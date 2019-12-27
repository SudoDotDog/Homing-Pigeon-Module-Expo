/**
 * @author WMXPY
 * @namespace Module_Expo
 * @description Push Module
 */

import Expo from 'expo-server-sdk';
import { Activity, IHomingPigeonModule } from "homing-pigeon";

export class ExpoPushNotificationModule implements IHomingPigeonModule {

    private readonly _expo: Expo;

    private constructor() {

        this._expo = new Expo();
    }

    public validate(activity: Activity): boolean {

        return false;
    }

    public async execute(activity: Activity): Promise<boolean> {

        return false;
    }
}
