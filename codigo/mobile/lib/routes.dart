import 'package:flutter/material.dart';
import 'package:mobile/screens/home.dart';
import 'package:mobile/screens/monitory_screen.dart';
import 'package:mobile/screens/user_page.dart';

var customRoutes = <String, WidgetBuilder>{
  '/': (context) => HomePage(),
  '/user': (context) => UserPage(),
  '/monitory': (context) => MonitoryPage()
};
