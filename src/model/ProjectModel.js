import { Timestamp } from 'firebase/firestore';
import FeedbackModel from './FeedbackModel.js';



class ProjectModel {
    constructor({
        id,
        userId,
        authorName,
        email,
        title,
        description,
        stream,
        category,
        tags,
        isFinalYearProject,
        imagesUrl,
        pdfUrl,
        createdAt,
        viewCount,
        components,
        projectType,
        projectStatus,
        appAndPlatforms,
        college,
        feedbacks,
        projectLevel,
        updatedAt,
        projectUrl,
        collaborators,
    }) {
        this.id = id;
        this.userId = userId;
        this.authorName = authorName;
        this.email = email;
        this.title = title;
        this.description = description;
        this.stream = stream;
        this.category = category;
        this.tags = tags;
        this.isFinalYearProject = isFinalYearProject;
        this.imagesUrl = imagesUrl;
        this.pdfUrl = pdfUrl;
        this.createdAt = createdAt;
        this.viewCount = viewCount;
        this.components = components;
        this.projectType = projectType;
        this.projectStatus = projectStatus;
        this.appAndPlatforms = appAndPlatforms;
        this.college = college;
        this.feedbacks = feedbacks;
        this.projectLevel = projectLevel;
        this.updatedAt = updatedAt;
        this.projectUrl = projectUrl;
        this.collaborators = collaborators;
    }

    toMap() {
        return {
            id: this.id,
            userId: this.userId,
            authorName: this.authorName,
            email: this.email,
            title: this.title,
            description: this.description,
            stream: this.stream,
            category: this.category,
            tags: this.tags,
            isFinalYearProject: this.isFinalYearProject,
            imagesUrl: this.imagesUrl,
            pdfUrl: this.pdfUrl,
            createdAt: this.createdAt,
            viewCount: this.viewCount,
            components: this.components,
            projectType: this.projectType,
            projectStatus: this.projectStatus,
            appAndPlatforms: this.appAndPlatforms,
            college: this.college,
            feedbacks: this.feedbacks.map((e) => e.toMap()),
            projectLevel: this.projectLevel,
            updatedAt: this.updatedAt,
            projectUrl: this.projectUrl,
            collaborators: this.collaborators,
        };
    }

    static fromMap(map) {
        return new ProjectModel({
            id: map.id || '',
            userId: map.userId || '',
            authorName: map.authorName || '',
            email: map.email || '',
            title: map.title || '',
            description: map.description || '',
            stream: map.stream || '',
            category: map.category || '',
            tags: map.tags || [],
            isFinalYearProject: map.isFinalYearProject || false,
            imagesUrl: map.imagesUrl || [],
            pdfUrl: map.pdfUrl || '',
            createdAt: map.createdAt instanceof Timestamp ? map.createdAt : Timestamp.fromDate(new Date()),
            viewCount: map.viewCount || 0,
            components: map.components || [],
            projectType: map.projectType || '',
            projectStatus: map.projectStatus || '',
            appAndPlatforms: map.appAndPlatforms || [],
            college: map.college || '',
            feedbacks: map.feedbacks ? map.feedbacks.map((e) => FeedbackModel.fromMap(e)) : [],
            projectLevel: map.projectLevel || '',
            updatedAt: map.updatedAt instanceof Timestamp ? map.updatedAt : Timestamp.fromDate(new Date()),
            projectUrl: map.projectUrl || '',
            collaborators: map.collaborators || [],
        });
    }
}

export default ProjectModel;