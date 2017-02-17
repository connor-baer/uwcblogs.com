#!/bin/bash

# Craft-Scripts
# @author    connor-baer
# @copyright Copyright (c) 2017 connor-baer
# @link      https://connorbaer.co/
# @package   craft-scripts
# @since     1.0.2
# @license   MIT

# Make sure we're in the right directory
cd "${0%/*}"

# Make sure the `.env.sh` exists
if [[ ! -f ".env.sh" ]] ; then
    echo 'File ".env.sh" is missing, aborting.'
    exit
fi

source ".env.sh"

# Download and unzip the latest CraftCMS
mkdir craft-install
cd craft-install/
wget -Oq latest.zip https://craftcms.com/latest.zip?accept_license=yes
unzip latest.zip
cd ..

# Move folders into place
mv craft-install/craft/app/ craft/app/
mv craft-install/craft/storage/ craft/storage/
mv craft-install/craft/config/db.php craft/config/db.php

# Clean up
rm -rf craft-install

# Create asset folders
for DIR in "${LOCAL_ASSETS_DIRS[@]}"
do
  mkdir $LOCAL_ASSETS_PATH$DIR
  echo "*** Created asset folder $DIR"
done

# Set the appropriate permissions
cd scripts
./set_perms.sh
