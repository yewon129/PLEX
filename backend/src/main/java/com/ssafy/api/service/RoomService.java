package com.ssafy.api.service;

import com.ssafy.api.request.RoomCreatePostReq;
import com.ssafy.api.request.ScoreHistoryPostReq;
import com.ssafy.db.entity.Room;

public interface RoomService {
    Room createRoom(RoomCreatePostReq roomInfo, String code);

    Room getRoomByCode(String code);

    void endRoom(Room room);

    long insertGameHistory(long roomNo);

    void insertScoreHistory(ScoreHistoryPostReq scoreHistoryPostReq);
}
