# PROTOCOL.md #
## Basic format ##
```json
{
	"type": String,	//操作的對象
	"roomId": Number,	//房間ID
	"players": [userId1, userId2, ......],	//玩家列表
	"serialNum": Number,	//這個訊息的序號，必比一則大1
	"data": Object	//其他資料
}
```
## From client ##
### Create new room ###
```json
{
	"type": "room",
	"roomId": Number,
	"players": [userId1, userId2, ......],
	"serialNum": Number,
	"data": {
		"action": "createNewRoom"
	}
}
```
### Update ###
```json
{
	"type": "room",
	"roomId": Number,
	"players": [userId1, userId2, ......],
	"serialNum": Number,
	"data": {
		"action": "update"
	}
}
```
### Take a card from other user ###
```json
{
	"type": "card",
	"roomId": Number,
	"players": [userId1, userId2, ......],
	"serialNum": Number,
	"data": {
		"action": "takeCard",
		"from": userId,
		"to": userId,
		"cards": [card]
	}
}
```
### Play a peer of cards ###
```json
{
	"type": "card",
	"roomId": Number,
	"players": [userId1, userId2, ......],
	"serialNum": Number,
	"data": {
		"action": "playCards",
		"from": userId,
		"cards": [card1, card2]
	}
}
```
## From server ##
### Update ###
```json
{
	"type": "room",
	"roomId": Number,
	"players": [userId1, userId2, ......],
	"serialNum": Number,
	"data": {
		"action": "update"
		"userId1": [card1, card2, ......],
		"userId2": [card1, card2, ......],
		"userId3": [card1, card2, ......],
		"userId4": [card1, card2, ......],
	}
}
```
### Create room ###
```json
{
	"type": "room",
	"roomId": Number,
	"players": [userId1, userId2, ......],
	"serialNum": Number,
	"data": {
		"action": "roomCreated"
	}
}
```
