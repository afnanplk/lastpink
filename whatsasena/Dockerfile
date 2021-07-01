FROM fusuf/whatsasena:latest

RUN git clone https://afnanplk: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@github.com/afnanplk/lastpink /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
