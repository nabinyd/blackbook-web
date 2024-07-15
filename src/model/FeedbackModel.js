class FeedbackModel {
    constructor({
        feedbackId,
        userId,
        authorName,
        email,
        comment,
        rating,
        createdAt,
        updatedAt
    }) {
        this.feedbackId = feedbackId;
        this.userId = userId;
        this.authorName = authorName;
        this.email = email;
        this.comment = comment;
        this.rating = rating;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();

    }
    static fromJson(doc) {
        return new FeedbackModel({
            feedbackId: doc.feedbackId,
            userId: doc.userId,
            authorName: doc.authorName,
            email: doc.email,
            comment: doc.comment,
            rating: doc.rating,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt
        });
    }
    toJson() {
        return {
            feedbackId: this.feedbackId,
            userId: this.userId,
            authorName: this.authorName,
            email: this.email,
            comment: this.comment,
            rating: this.rating,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

}

export default FeedbackModel;
