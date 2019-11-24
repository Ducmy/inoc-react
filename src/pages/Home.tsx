import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonButton,
  withIonLifeCycle,
  IonText,
} from '@ionic/react';
import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  constructor(props: Home) {
    super(props);
    this.state = {
      data: '',
    };
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter event fired');

  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave event fired');
  }

  ionViewDidEnter() {
    console.log('ionViewWillEnter event fired');
    axios.get("http://bigmac-product.canvas-works.info/api/v1/get_purpose/")
      .then(res => {
        console.log(res.data.dataList[0].body);
        this.setState({data: res.data.dataList[0].body});
      })
      .catch(error => {
        console.log(error);
      })
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave event fired');
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Trang chủ</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRow className="container">
          <IonText>aaa</IonText>
          <IonButton href="/re" color="secondary">
            Đặt hàng
          </IonButton>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(Home);