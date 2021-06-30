FROM fusuf/whatsasena:latest

RUN git clone https://afnanplk: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@github.com/afnanplk/lastpink /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
