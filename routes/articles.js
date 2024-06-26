import { Router } from 'express'
import * as articlesCtrl from '../controllers/articles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

//localhost:3001/api/articles
router.get('/', checkAuth, articlesCtrl.index)  
router.get('/checkforvalidimages', articlesCtrl.checkForValidImages)
router.get('/:articleId', checkAuth, articlesCtrl.show)
router.post('/:articleId/comments', checkAuth, articlesCtrl.createComment)
router.put('/:articleId/comments/:commentId', checkAuth, articlesCtrl.updateComment)
router.delete('/:articleId/comments/:commentId', checkAuth, articlesCtrl.deleteComment)

export { router }