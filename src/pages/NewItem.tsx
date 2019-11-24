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
  } from '@ionic/react';
  import React from 'react';
  
  const NewItem: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>Giỏ hàng</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonRow className="container">
            <IonButton href="/home" color="success">
                Quay về Trang chủ
            </IonButton>
        </IonRow>
      </IonContent>
      </IonPage>
    );
  };
  export default NewItem;