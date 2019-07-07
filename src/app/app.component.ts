import * as $ from 'jquery';
import { Component } from '@angular/core';
import {ProcessYad2Component} from './popups/process-yad2.component';
import {MatDialog} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

class Apartment {
  square_meters:number;
  floor:number;
  home_number:number;
  street:string;
  rooms:number;
  contact_name:string;
  location:any;
  currency:string;
  images:Array<string>;
  neighborhood:string;
  link:string;
  merchant:boolean;
  price:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apartment';

  public maxWalkingMinutes = 10;
  public maxPrice = 7000;

  public weWorks = [
      {"name":"Toha","address":"Yigal Alon St 114","latitude":32.0727773,"longitude":34.79492},
      {"name":"Shoken","address":"23 Shoken St","latitude":32.0515688,"longitude":34.7723244},
      {"name":"HaZerem","address":"7 HaPelech Street","latitude":32.0503025,"longitude":34.7666856},
      {"name":"London Ministore","address":"30 Ibn Gabirol","latitude":32.0907315,"longitude":34.8300521},
      {"name":"Dubnov","address":"7 Dubnov","latitude":32.074925,"longitude":34.783161},
      {"name":"Menachem Begin","address":"Derech Menachem Begin 144","latitude":32.0769741,"longitude":34.7923559},
      {"name":"Sarona","address":"3 Aluf Kalman Magen","latitude":32.0713993,"longitude":34.7865759}];

    addressesWaiting:Observable<Array<Apartment>>;
    addresses:Observable<Array<DocumentChangeAction<any>>>;
    private currentAddresses:Array<DocumentChangeAction<any>> = [];
    addressesById={};

  apartmentsWaiting:Observable<Array<Apartment>>;
  apartments:Observable<Array<DocumentChangeAction<any>>>;
  private currentApartments:Array<DocumentChangeAction<any>> = [];

  yad2JsonsWaiting:Observable<[]>;
  yad2Jsons:Observable<Array<DocumentChangeAction<any>>>;
  private currentYad2Jsons:Array<DocumentChangeAction<any>> = [];

  yad2ApartmentsWaiting:Observable<[]>;
  yad2Apartments:Observable<Array<DocumentChangeAction<any>>>;
  private currentYad2Apartments:Array<DocumentChangeAction<any>> = [];

  isNaN: Function = Number.isNaN;
  Math = Math;

  focused_general_id = null;
  refocusFlag = false;

  setFocus(general_id=null)
  {
      if ( general_id === null )
          general_id = this.focused_general_id;
      else
        this.focused_general_id = general_id;

      if ( general_id ) {
          $("*[general_id]").removeClass("focus");
          $("*[general_id='" + general_id + "']").addClass("focus").get(0).scrollIntoView(false);
      }
  }


    ngAfterViewChecked() {
      var self = this;
      if ( this.refocusFlag ) {
          setTimeout(function() {
              self.refocusFlag = false;
              self.setFocus();
          },0);
      }
    }



    updateApartment(apartment,incharge=undefined,notes=undefined)
    {
        if ( typeof(incharge) != "undefined" )
            apartment.incharge = incharge;
        if ( typeof(notes) != "undefined" )
            apartment.notes = notes;

        console.log(incharge,apartment.general_id);

        var apartmentsDoc = this.db.doc<any>('/apartments/' + apartment.general_id);
        apartmentsDoc.update(apartment);

        this.refocusFlag = true;
    }

    public getFinalPrice(apartment)
    {
        var price = apartment.price;
        if ( apartment.merchant )
            price = price * ( 1 + 1/12 );
        return Math.round(price);
    }

  doApartmentsFilter(apartments,addressesById,maxWalkingMinutes,maxPrice) {
      var ret = [];
      for ( var i = 0 ; i < apartments.length ; i++ )
      {
          if ( apartments[i].addressId && addressesById[apartments[i].addressId] )
          {
              if ( addressesById[apartments[i].addressId].durationToWeWorkInSeconds < maxWalkingMinutes*60) {
                  if ( apartments[i].price && !isNaN(apartments[i].price) )
                  {
                      var price = this.getFinalPrice(apartments[i]);
                      if ( price <= maxPrice )
                      {
                          ret.push(apartments[i]);
                      }
                  }
              }
          }
      }

      return ret;
  }

  constructor(public dialog: MatDialog, private http: HttpClient, private db: AngularFirestore) {
    var self = this;

    var yad2JsonsCollections = this.db.collection('/yad2_jsons',ref => ref.where('processed', '<', 2));

    this.yad2JsonsWaiting = <any>yad2JsonsCollections.valueChanges();

    this.yad2Jsons = yad2JsonsCollections.snapshotChanges();
    this.yad2Jsons.subscribe(function(data:Array<DocumentChangeAction<any>>) {
      //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
      self.currentYad2Jsons = data;
    });

    var yad2ApartmentsCollections = this.db.collection('/yad2_apartments',ref => ref.where('processed', '<', 10));

    this.yad2ApartmentsWaiting = <any>yad2ApartmentsCollections.valueChanges();

    this.yad2Apartments = yad2ApartmentsCollections.snapshotChanges();
    this.yad2Apartments.subscribe(function(data:Array<DocumentChangeAction<any>>) {
      //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
      self.currentYad2Apartments = data;
    });

    var apartmentsCollections = this.db.collection('/apartments',ref => ref.where('processed', '<', 1));

    this.apartmentsWaiting = <any>apartmentsCollections.valueChanges();

    this.apartments = apartmentsCollections.snapshotChanges();
    this.apartments.subscribe(function(data:Array<DocumentChangeAction<any>>) {
      //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
      self.currentApartments = data;
    });

      var addressesCollections = this.db.collection('/addresses',ref => ref.where('processed', '<', 1));

      this.addressesWaiting = <any>addressesCollections.valueChanges();

      this.addresses = addressesCollections.snapshotChanges();
      this.addresses.subscribe(function(data:Array<DocumentChangeAction<any>>) {
          //console.log("data",data[0].payload.doc.id,data[0].payload.doc.data());
          self.currentAddresses = data;
      });

      var alladdressesCollections = this.db.collection('/addresses',ref => ref.where('processed', '>=', 1));
      alladdressesCollections.snapshotChanges().subscribe(function(data:Array<DocumentChangeAction<any>>) {
          self.addressesById = {};

          for ( var i = 0 ; i < data.length ; i++ ) {
              var id = data[i].payload.doc.id;
              var _data = data[i].payload.doc.data();

              self.addressesById[id] = _data;
          }
      });

    

    /*
    function doIt(i)
    {
        var address = self.weWorks[i].address + ", tel aviv, israel";
        var config = self.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyAeHuyxXBY6fhmaSclMQ0pU8lWLRpxJUng");
        config.subscribe(function(data) {
            console.log(data);
            if ( data.status.toLowerCase() == "ok" )
            {
                self.weWorks[i].latitude = data.results[0].geometry.location.lat;
                self.weWorks[i].longitude = data.results[0].geometry.location.lng;
                console.log(JSON.stringify(self.weWorks));
            }
        });
    }

    for ( var i = 0 ; i < this.weWorks.length ; i++ )
    {
        doIt(i);
    }
     */
    
  }

    processAddressesData() {
      var self = this;
      function doIt(id,data) {
          setTimeout(function() {
              self.calculateAddressMeasurements(id,data.street,data.home_number,data.location.coordinates.latitude,data.location.coordinates.longitude);
          },10000*i);
      }

        for ( var i = 0 ; i < this.currentAddresses.length ; i++ ) {
            var id = this.currentAddresses[i].payload.doc.id;
            var data = this.currentAddresses[i].payload.doc.data();

            doIt(id,Object.assign({},data));
        }

    }

  private calculateAddressMeasurements(id,street,home_number,lat,lng) {
      console.log("processing address",id);

      var self = this;

      function doIt() {
          //console.log("doIt",id);

          var origin = lat+","+lng;
          var directionsService = new window["google"].maps.DirectionsService;

          var distsCount = 0;
          var dists = {};

          function processWeWork(index) {
              var wework = self.weWorks[index];

              directionsService.route({
                  origin: origin,
                  destination: wework.address + ", tel aviv, israel",
                  travelMode: 'WALKING'
              }, function(response, status) {

                  if ( index < ( self.weWorks.length - 1 ) ) {
                      setTimeout(function() {
                          processWeWork(index + 1)
                      },250);
                  }

                      console.log(id,status,response);
                  if ( status.toLowerCase() == "ok" )
                  {
                      var min = 1000000;
                      var distMin = null;
                      for ( var i = 0 ; i < response.routes.length ; i++ )
                      {
                          if ( response.routes[i].legs.length == 1 )
                          {
                              if ( response.routes[i].legs[0].duration.value < min )
                              {
                                  min = response.routes[i].legs[0].duration.value;
                                  distMin = response.routes[i].legs[0].distance.value;
                              }
                          }
                          else
                          {
                              console.log("error",response);
                          }
                      }
                      dists[wework.name] = [min,distMin];

                      distsCount++;

                      console.log(id,min,distMin,wework,distsCount,dists);

                      if ( distsCount == self.weWorks.length )
                      {
                          var min = 100000;
                          var distMin = null;
                          var weworkNameMin = null;

                          for ( var i = 0 ; i < self.weWorks.length ; i++ )
                          {
                              if ( dists[self.weWorks[i].name][0] < min )
                              {
                                  min = dists[self.weWorks[i].name][0];
                                  distMin = dists[self.weWorks[i].name][1];
                                  weworkNameMin = self.weWorks[i].name;
                              }
                          }

                          var addressesDoc = self.db.doc<any>('/addresses/' + id);
                          addressesDoc.update({
                              weworkName:weworkNameMin,
                              distanceToWeworkInMeters:distMin,
                              durationToWeWorkInSeconds:min,
                              processed: 1
                          });

                          console.log("done with id - ", id);
                      }
                  }
                  //console.log("result",response,status);
              });
          }

          processWeWork(0);

      }

      if ( lat === null ) {
          var addressesDoc = self.db.doc<any>('/addresses/' + id);
          addressesDoc.update({
              processed: 1
          });
          console.log("done with id (bad) - ", id);
      }
      else if ( !isNaN(home_number) ) {
          var address = street + " " + home_number + ", תל אביב, ישראל";
          var config = self.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyAeHuyxXBY6fhmaSclMQ0pU8lWLRpxJUng");
          config.subscribe(function(data) {
              //console.log(data);
              if ( (<any>data).status.toLowerCase() == "ok" )
              {
                  lat = (<any>data).results[0].geometry.location.lat;
                  lng = (<any>data).results[0].geometry.location.lng;
                  doIt();
              }
          });
      }
      else
          doIt();
  }

    handleApartmentMapClick(apartment) {
        //this.calculateAddressMeasurements(apartment.street,apartment.home_number,apartment.location.coordinates.latitude,apartment.location.coordinates.longitude);
        /*
      if ( !isNaN(apartment.home_number) )
      {

          console.log("url",url,origin,destinations);

      }
        */
    }


  toDeg(num) {
    return Math.floor(num) + "°" + Math.floor(num%1*100) + "'" + ((num%1*100)%1*100);
    //https://www.google.com/maps/place/41°24'12.2"N+2°10'26.5"E   https://www.google.com/maps/@32.044318,34.759277
  }

  processYad2ApartmentsData(): void {
      var self= this;

    for ( var i = 0 ; i < this.currentYad2Apartments.length ; i++ ) {
      var id = this.currentYad2Apartments[i].payload.doc.id;
      var data = this.currentYad2Apartments[i].payload.doc.data();

      var general_id = "yad2_" + id;
      var floor = parseInt(data.Floor_text);
      var rooms = parseInt(data.Rooms_text);
      var home_number = parseInt(data.address_home_number);
      var street = data.street;
      var contact_name = data.contact_name;
      var location = {coordinates:data.coordinates};
      var currency = typeof(data.currency) == "undefined" ? "?" : data.currency;
      var images = [];
      for ( var key in data.images )
        images.push(data.images[key].src);
      var neighborhood = data.neighborhood;
      var link = "https://www.yad2.co.il/s/c/" + data.link_token;
      var merchant = data.merchant;
      var price = parseFloat(data.price.replace(",",""));
      var square_meters = parseFloat(data.square_meters);

      var item = {
          general_id:general_id,
          square_meters:square_meters,
        floor:floor,
        home_number:home_number,
        street:street,
        rooms:rooms,
        contact_name:contact_name,
        location:location,
        currency:currency,
        images:images,
        neighborhood:neighborhood,
        link:link,
        merchant:merchant,
        price:price,
        processed:0,
      };

        var addressId = item.street + "," + item.home_number + "," + item.location.coordinates.latitude + "," + item.location.coordinates.longitude;

        var setAddress = function(addressId,home_number,street,location){
            var addressesDoc = self.db.doc<any>('/addresses/' + addressId);
            addressesDoc.update({
                home_number:home_number,
                street:street,
                location:location,
            }).then(function() {
            }).catch(function(error) {
                addressesDoc.set({
                    home_number: home_number,
                    street: street,
                    location: location,
                    processed: 0,
                });
            });
        }

        setAddress(addressId,home_number,street,Object.assign({}, location));

        item["addressId"] = addressId;
      var apartmentsDoc = this.db.doc<any>('/apartments/' + general_id);
      apartmentsDoc.set(item,{merge: true});

      var yad2ApartmentsDoc = this.db.doc<any>('/yad2_apartments/' + id);
      yad2ApartmentsDoc.update({processed: 10});
      console.log("done with id - ", id);
    }

  }

  processYad2JsonData(): void {
    for ( var i = 0 ; i < this.currentYad2Jsons.length ; i++ ) {
      var id = this.currentYad2Jsons[i].payload.doc.id;
      try {
        var data = JSON.parse(this.currentYad2Jsons[i].payload.doc.data().json);
        for (var j = 0; j < data.feed.feed_items.length; j++) {
          var item = data.feed.feed_items[j];
          if (item.ad_number) {
            var yad2ApartmentsDoc = this.db.doc<any>('/yad2_apartments/' + item.ad_number);
            item.processed = 0;
            yad2ApartmentsDoc.set(item);
          }
        }
      }
      catch (e) {
        console.log("error with",id);
      }
      var yad2JsonsDoc = this.db.doc<any>('/yad2_jsons/' + id);
      yad2JsonsDoc.update({processed: 2});
      console.log("done with id - ", id);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProcessYad2Component, {
      width: '250px',
      data: null// {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

