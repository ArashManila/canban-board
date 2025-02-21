
import { CommentsType } from "../../types/types";
import Comment from "./Comment";
// import data from "../../DataManagment/Data";

type CommentBlockProps={
  comments: {[key: string]: CommentsType},
}

const CommentsBlock = ({comments}:CommentBlockProps) => {

  
  return (
    <>
      {comments ? (
        Object.entries(comments).map(([key,value]) => (
          <Comment  key={key} content={value} />
        ))
      ) : (
        <h4>No comments</h4>
      )}
    </>
  );
};

export default CommentsBlock;
