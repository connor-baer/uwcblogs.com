mkdir craft-install

cd craft-install/
wget -O craft-install/latest.zip https://craftcms.com/latest.zip?accept_license=yes
unzip latest.zip
cd ..

mv craft-install/craft/app/ craft/app/
mv craft-install/craft/storage/ craft/storage/
mv craft-install/craft/config/db.php craft/config/db.php

rm -rf craft-install
