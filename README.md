Yeni bir screen eklemek istedigimde process su sekilde;

1.  src > screens icine istenen dosyayi .js uzantili sekilde ekliyoruz.

2.  Gerekli component olusturma adimlarini asagidaki gibi uyguluyoruz.

    a. Asagidaki kutuphaneleri en ust satirda import ediyoruz;

         import React from 'react';
         import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

    b. 'JSX' e return ettigimiz bir component ya da bir fonksiyon olusturuyoruz

    c. Component' e sekil vermek icin stylesheet olusturuyoruz.

    d. b adiminda olusturdugumuz componenti en altta import ediyoruz ki projemizde baska yerlerde de kullanabilelim.

3.  Olusturdugumuz screeni App.js dosyamizda tanimliyoruz ve title veriyoruz.

4.  Ardindan HomeScreen sayfamiza, ilgili sayfaya ulasabilmek icin bir buton koyuyoruz onPress eventine ilgili screenin title'ini veriyoruz.
