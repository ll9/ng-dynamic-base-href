@ECHO OFF

call ng build --localize

xcopy .\dist\ng-base-href\browser\* C:\inetpub\wwwroot\href\ /s /e /y