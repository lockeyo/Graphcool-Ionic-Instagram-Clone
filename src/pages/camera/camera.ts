import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Apollo } from 'apollo-angular';
import {Camera} from 'ionic-native';
import { Transfer } from 'ionic-native';
import { HTTP } from 'ionic-native';

import gql from 'graphql-tag';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  description: string;
    imageUrl: string;
    public base64Image: string;
    public imageData: string;

    // File upload
    public headers = new Headers();

    constructor(
      public navCtrl: NavController,
      private apollo: Apollo,
    ) {}

    getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach(key => formData.append(key, object[key]));
      return formData;
    }

    postFile(targetPathURL){
      // new Transfer
      const fileTransfer = new Transfer();

      // URL
      var urlTo = "https://api.graph.cool/file/v1/ciz5dctr01prd015261q0o8jd";

      // File for Upload
      var targetPath = targetPathURL;

      // File name only
      var extension = targetPath.split(".").pop();
      var filepart = "image";
      var filename = filepart + "." + extension;

      var options = {
                      fileKey: "data",
                      fileName: filename,
                      chunkedMode: false,
                      mimeType: "image/jpeg",
                      headers: {
                      Connection: "close"
                    },
                    params : {
                      'fileName': filename
                    },
                      data: targetPath
                    };

      fileTransfer.upload(targetPath, urlTo, options)
       .then((data) => {
         console.log('#Hier werden die Daten ausgegeben')
         console.log(data);
         var id = JSON.parse((data as any).response).id;
         console.log('#Hier werden die Daten !!!')
         console.log(id);

         this.apollo.mutate({
           mutation: gql`
             mutation {
               createImage (
                 pictureId: "${id}"
               ) {
                 id
               }
             }
           `,
           variables: {},
         })

       }, (err) => {
         // error
         console.log(err);

       })
    }

    makePicture(){
      // refresh page here
      Camera.getPicture({
        destinationType: Camera.DestinationType.FILE_URI,
        targetWidth: 1000,
        targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
        // console.log(imageData);
        // var img64 = "data:image/jpeg;base64," + imageData;
        this.postFile(imageData);
      }, (err) => {
        console.log(err);
      });
    }
}
