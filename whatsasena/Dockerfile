FROM fusuf/whatsasena:latest

RUN git clone https://afnanplk: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@github.com/afnanplk/lastpink /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
