import { Router } from 'express';
import * as sendRequestController from './send_request/controller';
import * as acceptRequestController from './accept_request/controller';
import * as rejectRequestController from './reject_request/controller';
import * as removeFriendController from './remove_friend/controller';
import * as listFriendsController from './list_friends/controller';
import * as listRequestsController from './list_requests/controller';

const router = Router();

router.post('/send_request', sendRequestController.sendFriendRequest);
router.post('/accept_request', acceptRequestController.acceptFriendRequest);
router.post('/reject_request', rejectRequestController.rejectFriendRequest);
router.post('/remove_friend', removeFriendController.removeFriend);
router.get('/list', listFriendsController.listFriends);
router.get('/requests', listRequestsController.listFriendRequests);

export default router;
