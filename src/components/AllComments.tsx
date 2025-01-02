import React from "react";
import Link from "next/link";

interface Props {
  comments: Array<Comment>;
  slug: string;
  commentsOrder: string;
}

export interface Comment {
  name: string;
  comment: string;
  _createdAt: string;
  _id: string;
}

const AllComments = ({ comments, slug, commentsOrder }: Props) => {
  return (
    <div>
      <h3>All Comments</h3>
      {comments?.length === 0 && <p>No comments yet.</p>}
      {comments?.length > 0 && (
        <div className="mb-2">
          <Link
            scroll={false}
            href={`/post/${slug}?comments=asc`}
            className={`mr-4 text-sm ${
              commentsOrder === "asc" ? "text-purple-500" : ""
            }`}
          >
            Oldest
          </Link>
          <Link
            scroll={false}
            href={`/${slug}?comments=desc`}
            className={`mr-4 text-sm ${
              commentsOrder === "desc" ? "text-purple-500" : ""
            }`}
          >
            Newest
          </Link>
        </div>
      )}
      {comments?.map((comment) => (
        <div key={comment?._id} className="border-b border-gray-200/50 py-2">
          <p>
            <strong>{comment?.name}</strong>{" "}
            <span className="text-gray-500 text-sm">
              {new Date(comment?._createdAt).toLocaleString()}
            </span>
          </p>
          <p>{comment?.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default AllComments;