// ============================================
// MODELOS INICIALES PARA COURSEHUB FREE
// Copiar estos archivos a lib/models/
// ============================================

// ============ USER MODEL ============
// archivo: lib/models/user_model.dart

class User {
  final String userId;
  final String email;
  final String firstName;
  final String lastName;
  final String? profilePhoto;
  final String? bio;
  final UserRole role;
  final UserStatus status;
  final DateTime createdAt;
  final DateTime? updatedAt;
  final UserPreferences preferences;

  User({
    required this.userId,
    required this.email,
    required this.firstName,
    required this.lastName,
    this.profilePhoto,
    this.bio,
    required this.role,
    required this.status,
    required this.createdAt,
    this.updatedAt,
    required this.preferences,
  });

  // Método para crear desde JSON (Firebase)
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      userId: json['userId'] ?? '',
      email: json['email'] ?? '',
      firstName: json['firstName'] ?? '',
      lastName: json['lastName'] ?? '',
      profilePhoto: json['profilePhoto'],
      bio: json['bio'],
      role: UserRole.values.firstWhere(
        (e) => e.toString().split('.').last == json['role'],
        orElse: () => UserRole.student,
      ),
      status: UserStatus.values.firstWhere(
        (e) => e.toString().split('.').last == json['status'],
        orElse: () => UserStatus.active,
      ),
      createdAt: DateTime.parse(json['createdAt'] ?? DateTime.now().toString()),
      updatedAt: json['updatedAt'] != null 
          ? DateTime.parse(json['updatedAt']) 
          : null,
      preferences: UserPreferences.fromJson(json['preferences'] ?? {}),
    );
  }

  // Método para convertir a JSON
  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'email': email,
      'firstName': firstName,
      'lastName': lastName,
      'profilePhoto': profilePhoto,
      'bio': bio,
      'role': role.toString().split('.').last,
      'status': status.toString().split('.').last,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
      'preferences': preferences.toJson(),
    };
  }

  String get fullName => '$firstName $lastName';

  User copyWith({
    String? userId,
    String? email,
    String? firstName,
    String? lastName,
    String? profilePhoto,
    String? bio,
    UserRole? role,
    UserStatus? status,
    DateTime? createdAt,
    DateTime? updatedAt,
    UserPreferences? preferences,
  }) {
    return User(
      userId: userId ?? this.userId,
      email: email ?? this.email,
      firstName: firstName ?? this.firstName,
      lastName: lastName ?? this.lastName,
      profilePhoto: profilePhoto ?? this.profilePhoto,
      bio: bio ?? this.bio,
      role: role ?? this.role,
      status: status ?? this.status,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      preferences: preferences ?? this.preferences,
    );
  }
}

enum UserRole { student, instructor, admin }
enum UserStatus { active, suspended, deleted }

class UserPreferences {
  final bool notifications;
  final String language;
  final String theme;

  UserPreferences({
    this.notifications = true,
    this.language = 'es',
    this.theme = 'light',
  });

  factory UserPreferences.fromJson(Map<String, dynamic> json) {
    return UserPreferences(
      notifications: json['notifications'] ?? true,
      language: json['language'] ?? 'es',
      theme: json['theme'] ?? 'light',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'notifications': notifications,
      'language': language,
      'theme': theme,
    };
  }
}

// ============ COURSE MODEL ============
// archivo: lib/models/course_model.dart

class Course {
  final String courseId;
  final String title;
  final String description;
  final String category;
  final CourseLevel level;
  final String instructorId;
  final String? thumbnail;
  final String? banner;
  final double duration; // horas
  final double rating;
  final int reviewCount;
  final int lessonCount;
  final int studentCount;
  final CourseStatus status;
  final double price; // 0 para gratis
  final DateTime createdAt;
  final DateTime? updatedAt;
  final List<String> learningOutcomes;
  final List<String> requirements;
  final List<String> tags;

  Course({
    required this.courseId,
    required this.title,
    required this.description,
    required this.category,
    required this.level,
    required this.instructorId,
    this.thumbnail,
    this.banner,
    required this.duration,
    this.rating = 0.0,
    this.reviewCount = 0,
    this.lessonCount = 0,
    this.studentCount = 0,
    required this.status,
    this.price = 0.0,
    required this.createdAt,
    this.updatedAt,
    this.learningOutcomes = const [],
    this.requirements = const [],
    this.tags = const [],
  });

  factory Course.fromJson(Map<String, dynamic> json) {
    return Course(
      courseId: json['courseId'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      category: json['category'] ?? '',
      level: CourseLevel.values.firstWhere(
        (e) => e.toString().split('.').last == json['level'],
        orElse: () => CourseLevel.beginner,
      ),
      instructorId: json['instructorId'] ?? '',
      thumbnail: json['thumbnail'],
      banner: json['banner'],
      duration: (json['duration'] ?? 0).toDouble(),
      rating: (json['rating'] ?? 0).toDouble(),
      reviewCount: json['reviewCount'] ?? 0,
      lessonCount: json['lessonCount'] ?? 0,
      studentCount: json['studentCount'] ?? 0,
      status: CourseStatus.values.firstWhere(
        (e) => e.toString().split('.').last == json['status'],
        orElse: () => CourseStatus.draft,
      ),
      price: (json['price'] ?? 0).toDouble(),
      createdAt: DateTime.parse(json['createdAt'] ?? DateTime.now().toString()),
      updatedAt: json['updatedAt'] != null 
          ? DateTime.parse(json['updatedAt']) 
          : null,
      learningOutcomes: List<String>.from(json['learningOutcomes'] ?? []),
      requirements: List<String>.from(json['requirements'] ?? []),
      tags: List<String>.from(json['tags'] ?? []),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'courseId': courseId,
      'title': title,
      'description': description,
      'category': category,
      'level': level.toString().split('.').last,
      'instructorId': instructorId,
      'thumbnail': thumbnail,
      'banner': banner,
      'duration': duration,
      'rating': rating,
      'reviewCount': reviewCount,
      'lessonCount': lessonCount,
      'studentCount': studentCount,
      'status': status.toString().split('.').last,
      'price': price,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
      'learningOutcomes': learningOutcomes,
      'requirements': requirements,
      'tags': tags,
    };
  }

  Course copyWith({
    String? courseId,
    String? title,
    String? description,
    String? category,
    CourseLevel? level,
    String? instructorId,
    String? thumbnail,
    String? banner,
    double? duration,
    double? rating,
    int? reviewCount,
    int? lessonCount,
    int? studentCount,
    CourseStatus? status,
    double? price,
    DateTime? createdAt,
    DateTime? updatedAt,
    List<String>? learningOutcomes,
    List<String>? requirements,
    List<String>? tags,
  }) {
    return Course(
      courseId: courseId ?? this.courseId,
      title: title ?? this.title,
      description: description ?? this.description,
      category: category ?? this.category,
      level: level ?? this.level,
      instructorId: instructorId ?? this.instructorId,
      thumbnail: thumbnail ?? this.thumbnail,
      banner: banner ?? this.banner,
      duration: duration ?? this.duration,
      rating: rating ?? this.rating,
      reviewCount: reviewCount ?? this.reviewCount,
      lessonCount: lessonCount ?? this.lessonCount,
      studentCount: studentCount ?? this.studentCount,
      status: status ?? this.status,
      price: price ?? this.price,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      learningOutcomes: learningOutcomes ?? this.learningOutcomes,
      requirements: requirements ?? this.requirements,
      tags: tags ?? this.tags,
    );
  }
}

enum CourseLevel { beginner, intermediate, advanced }
enum CourseStatus { draft, published, archived }

// ============ ENROLLMENT MODEL ============
// archivo: lib/models/enrollment_model.dart

class Enrollment {
  final String enrollmentId;
  final String userId;
  final String courseId;
  final DateTime enrolledDate;
  final int progress; // 0-100
  final EnrollmentStatus status;
  final List<String> completedLessons;
  final bool certificateIssued;
  final String? certificateId;
  final double? grade; // 0-100
  final DateTime? lastAccessedDate;

  Enrollment({
    required this.enrollmentId,
    required this.userId,
    required this.courseId,
    required this.enrolledDate,
    this.progress = 0,
    required this.status,
    this.completedLessons = const [],
    this.certificateIssued = false,
    this.certificateId,
    this.grade,
    this.lastAccessedDate,
  });

  factory Enrollment.fromJson(Map<String, dynamic> json) {
    return Enrollment(
      enrollmentId: json['enrollmentId'] ?? '',
      userId: json['userId'] ?? '',
      courseId: json['courseId'] ?? '',
      enrolledDate: DateTime.parse(json['enrolledDate'] ?? DateTime.now().toString()),
      progress: json['progress'] ?? 0,
      status: EnrollmentStatus.values.firstWhere(
        (e) => e.toString().split('.').last == json['status'],
        orElse: () => EnrollmentStatus.inProgress,
      ),
      completedLessons: List<String>.from(json['completedLessons'] ?? []),
      certificateIssued: json['certificateIssued'] ?? false,
      certificateId: json['certificateId'],
      grade: (json['grade'] ?? 0).toDouble(),
      lastAccessedDate: json['lastAccessedDate'] != null
          ? DateTime.parse(json['lastAccessedDate'])
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'enrollmentId': enrollmentId,
      'userId': userId,
      'courseId': courseId,
      'enrolledDate': enrolledDate.toIso8601String(),
      'progress': progress,
      'status': status.toString().split('.').last,
      'completedLessons': completedLessons,
      'certificateIssued': certificateIssued,
      'certificateId': certificateId,
      'grade': grade,
      'lastAccessedDate': lastAccessedDate?.toIso8601String(),
    };
  }
}

enum EnrollmentStatus { inProgress, completed, dropped }

// ============ LESSON MODEL ============
// archivo: lib/models/lesson_model.dart

class Lesson {
  final String lessonId;
  final String courseId;
  final String title;
  final String description;
  final int order;
  final String? videoUrl;
  final int duration; // minutos
  final List<LessonMaterial> materials;
  final bool? hasQuiz;
  final DateTime createdAt;
  final DateTime? updatedAt;

  Lesson({
    required this.lessonId,
    required this.courseId,
    required this.title,
    required this.description,
    required this.order,
    this.videoUrl,
    required this.duration,
    this.materials = const [],
    this.hasQuiz,
    required this.createdAt,
    this.updatedAt,
  });

  factory Lesson.fromJson(Map<String, dynamic> json) {
    return Lesson(
      lessonId: json['lessonId'] ?? '',
      courseId: json['courseId'] ?? '',
      title: json['title'] ?? '',
      description: json['description'] ?? '',
      order: json['order'] ?? 0,
      videoUrl: json['videoUrl'],
      duration: json['duration'] ?? 0,
      materials: (json['materials'] as List?)
              ?.map((m) => LessonMaterial.fromJson(m))
              .toList() ??
          [],
      hasQuiz: json['hasQuiz'],
      createdAt: DateTime.parse(json['createdAt'] ?? DateTime.now().toString()),
      updatedAt: json['updatedAt'] != null 
          ? DateTime.parse(json['updatedAt']) 
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'lessonId': lessonId,
      'courseId': courseId,
      'title': title,
      'description': description,
      'order': order,
      'videoUrl': videoUrl,
      'duration': duration,
      'materials': materials.map((m) => m.toJson()).toList(),
      'hasQuiz': hasQuiz,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
    };
  }
}

class LessonMaterial {
  final String name;
  final String url;
  final String type; // PDF, DOC, etc

  LessonMaterial({
    required this.name,
    required this.url,
    required this.type,
  });

  factory LessonMaterial.fromJson(Map<String, dynamic> json) {
    return LessonMaterial(
      name: json['name'] ?? '',
      url: json['url'] ?? '',
      type: json['type'] ?? 'PDF',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'url': url,
      'type': type,
    };
  }
}

// ============ CERTIFICATE MODEL ============
// archivo: lib/models/certificate_model.dart

class Certificate {
  final String certificateId;
  final String userId;
  final String courseId;
  final DateTime issuedDate;
  final String certificateCode; // código único validable
  final String downloadUrl;
  final CertificateStatus status;

  Certificate({
    required this.certificateId,
    required this.userId,
    required this.courseId,
    required this.issuedDate,
    required this.certificateCode,
    required this.downloadUrl,
    required this.status,
  });

  factory Certificate.fromJson(Map<String, dynamic> json) {
    return Certificate(
      certificateId: json['certificateId'] ?? '',
      userId: json['userId'] ?? '',
      courseId: json['courseId'] ?? '',
      issuedDate: DateTime.parse(json['issuedDate'] ?? DateTime.now().toString()),
      certificateCode: json['certificateCode'] ?? '',
      downloadUrl: json['downloadUrl'] ?? '',
      status: CertificateStatus.values.firstWhere(
        (e) => e.toString().split('.').last == json['status'],
        orElse: () => CertificateStatus.valid,
      ),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'certificateId': certificateId,
      'userId': userId,
      'courseId': courseId,
      'issuedDate': issuedDate.toIso8601String(),
      'certificateCode': certificateCode,
      'downloadUrl': downloadUrl,
      'status': status.toString().split('.').last,
    };
  }
}

enum CertificateStatus { valid, revoked }
