nano sync.sh

while true ; do
rsync -p --chmod=+rwx --no-perms --copy-unsafe-links -vrz ~/documents/choose-wisely/public/static/dist/ sandeep.ratio@ratio-web-08:/var/www/dev/sandeep/seo/choose-wisely/public/stat$
sleep 3 # or however many seconds you like
done;

chmod +x sync.sh
ssh-add