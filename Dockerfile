FROM linux
RUN apt-get install npm
COPY "./dist/" "/root/"
RUN cd /root/app
RUN npm run main.js
