# Conzu.me App for UofTHacks 2017

Goal: to provide a better shopping experience for the user by removing the process of paying at the cash register. 

With Conzu.me, the user has the ability to pay for products they buy at any store (retail primarily) through their phone, present the receipt before they walk out, and done. 

Conzu.me was created during *UofTHacks 2017* by [Darshan](https://www.linkedin.com/in/darshan-mehta-7462b1b7), [Kent](https://www.linkedin.com/kent-tsuenchy-0b980159), [Jaskiran](https://www.linkedin.com/in/jaskiran-lamba), and [Raj](https://www.linkedin.com/in/kuzaxe).

**_Must be familiar with Node/npm, Cordova, Ionic, and Android, Xcode._**

## Prepare app 
In terminal run the commands:
```bash
git clone https://github.com/ktsuench/conzume.git
cd Frontend
npm install
ionic state restore
ionic build
```

## Run on IOS
If you want to run this on a iPhone, go to the platforms/ios directory and open the Xcode project file and set up the developer as yourself in the project settings. After you will need to run the app on your iPhone and go into settings -> general -> devices and authorize your developer certificate as trusted to run the app. Once you set that up, run the app again through Xcode and wait for it to load up on your iPhone. Note scanning is limited to the few items we had in the database.

## Run on Android
If you want to run this on an Android phone, the requirements is that you need Android 5 and above. You will require to have Java and the correct Android SDK installed for your phone to run the app. Once you have met those requirements, in the terminal run `ionic run android`.

## Run in Browser
To view the app on web, run 'ionic serve' - then go to developer tab, and select "Enter Responsive Design Mode".

## Contact Us
If there are any issues please feel free to get in touch with us.
*Thank you.*