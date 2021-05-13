import 'package:flutter/material.dart';
import 'package:mobile/models/monitory_application.dart';
import 'package:mobile/widgets/change_theme_widget.dart';
import 'package:mobile/widgets/cpu_chart.dart';
import 'package:mobile/widgets/logo.dart';

class MonitoryPage extends StatefulWidget {
  @override
  _MonitoryPageState createState() => _MonitoryPageState();
}

class _MonitoryPageState extends State<MonitoryPage> {
  @override
  Widget build(BuildContext context) {
    final MonitoryApplication routeData =
        ModalRoute.of(context).settings.arguments;
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: Center(
          child: Logo(
            imageHeight: 20,
            textStyle: Theme.of(context).textTheme.headline6,
          ),
        ),
        actions: [ChangeThemeSwitch()],
      ),
      body: Center(
        child: Column(
          children: [
            Text(
              routeData.appName,
              style: Theme.of(context).textTheme.headline3,
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Card(
                child: Padding(
                  padding: const EdgeInsets.all(4.0),
                  child: Container(
                    height: 200,
                    width: 300,
                    child: StackedAreaCustomColorLineChart.withSampleData(),
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
