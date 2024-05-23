@ECHO OFF

call ng build

xcopy .\dist\ng-base-href\browser\* C:\inetpub\wwwroot\href\ /s /e /y