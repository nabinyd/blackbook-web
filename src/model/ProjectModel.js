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
        updatedAt,
        projectUrl,
        collaborators,
        projectPdf,
        averageRating,
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
        this.updatedAt = updatedAt;
        this.projectUrl = projectUrl;
        this.collaborators = collaborators;
        this.projectPdf = projectPdf;
        this.averageRating = averageRating;
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
            updatedAt: this.updatedAt,
            projectUrl: this.projectUrl,
            collaborators: this.collaborators,
            projectPdf: this.projectPdf,
            averageRating: this.averageRating,
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
            updatedAt: map.updatedAt instanceof Timestamp ? map.updatedAt : Timestamp.fromDate(new Date()),
            projectUrl: map.projectUrl || '',
            collaborators: map.collaborators || [],
            projectPdf: map.projectPdf || ''
        });
    }
}

export default ProjectModel;