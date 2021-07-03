FROM fusuf/whatsasena:latest

RUN git clone https://afnanplk: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@github.com/afnanplk/lastpink /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
