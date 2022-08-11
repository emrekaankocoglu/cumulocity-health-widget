# Cumulocity IoT Health Microservice Widget
This is a widget for health microservice (https://github.com/emrekaankocoglu/cumulocity-health-microservice) built with SAG Cumulocity IoT Runtime Widget Template. It does a fetch request to get the device health in its deployed context from the microservice.
![Picture](./ss.png)
>>>>>>> 8c41408c317dda41b6e31be1f2322e9b5a30140e

##  Building a Widget
1. Clone this repo: 
```
git clone https://github.com/SoftwareAG/cumulocity-runtime-widget.git
```
2. Install the dependencies:
```
cd cumulocity-runtime-widget
npm install
```
3. Build the widget:
```
npm run build
```
4. After the build completes the `/dist` folder will contain a `widget.zip` file, this is your deployable widget

## Deploying a Widget
Runtime widgets can be installed using [Cumulocity Application Builder](https://github.com/SoftwareAG/cumulocity-app-builder#installation)
