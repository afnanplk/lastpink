FROM fusuf/whatsasena:latest

RUN git clone https://afnanplk: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@github.com/afnanplk/lastpink /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
