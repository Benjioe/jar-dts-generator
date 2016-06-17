/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
/// <reference path="./java.nio.ShortBuffer.d.ts" />

declare module android {
	export module opengl {
		export class GLES11Ext {
			public constructor();
			public static glBlendEquationSeparateOES(param0: number, param1: number): void;
			public static glBlendFuncSeparateOES(param0: number, param1: number, param2: number, param3: number): void;
			public static glBlendEquationOES(param0: number): void;
			public static glDrawTexsOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static glDrawTexiOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static glDrawTexxOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static glDrawTexsvOES(param0: native.Array<number>, param1: number): void;
			public static glDrawTexsvOES(param0: java.nio.ShortBuffer): void;
			public static glDrawTexivOES(param0: native.Array<number>, param1: number): void;
			public static glDrawTexivOES(param0: java.nio.IntBuffer): void;
			public static glDrawTexxvOES(param0: native.Array<number>, param1: number): void;
			public static glDrawTexxvOES(param0: java.nio.IntBuffer): void;
			public static glDrawTexfOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static glDrawTexfvOES(param0: native.Array<number>, param1: number): void;
			public static glDrawTexfvOES(param0: java.nio.FloatBuffer): void;
			public static glEGLImageTargetTexture2DOES(param0: number, param1: java.nio.Buffer): void;
			public static glEGLImageTargetRenderbufferStorageOES(param0: number, param1: java.nio.Buffer): void;
			public static glAlphaFuncxOES(param0: number, param1: number): void;
			public static glClearColorxOES(param0: number, param1: number, param2: number, param3: number): void;
			public static glClearDepthxOES(param0: number): void;
			public static glClipPlanexOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glClipPlanexOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glColor4xOES(param0: number, param1: number, param2: number, param3: number): void;
			public static glDepthRangexOES(param0: number, param1: number): void;
			public static glFogxOES(param0: number, param1: number): void;
			public static glFogxvOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glFogxvOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glFrustumxOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static glGetClipPlanexOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glGetClipPlanexOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glGetFixedvOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glGetFixedvOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glGetLightxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetLightxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetMaterialxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetMaterialxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetTexEnvxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetTexEnvxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetTexParameterxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetTexParameterxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glLightModelxOES(param0: number, param1: number): void;
			public static glLightModelxvOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glLightModelxvOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glLightxOES(param0: number, param1: number, param2: number): void;
			public static glLightxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glLightxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glLineWidthxOES(param0: number): void;
			public static glLoadMatrixxOES(param0: native.Array<number>, param1: number): void;
			public static glLoadMatrixxOES(param0: java.nio.IntBuffer): void;
			public static glMaterialxOES(param0: number, param1: number, param2: number): void;
			public static glMaterialxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glMaterialxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glMultMatrixxOES(param0: native.Array<number>, param1: number): void;
			public static glMultMatrixxOES(param0: java.nio.IntBuffer): void;
			public static glMultiTexCoord4xOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static glNormal3xOES(param0: number, param1: number, param2: number): void;
			public static glOrthoxOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static glPointParameterxOES(param0: number, param1: number): void;
			public static glPointParameterxvOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glPointParameterxvOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glPointSizexOES(param0: number): void;
			public static glPolygonOffsetxOES(param0: number, param1: number): void;
			public static glRotatexOES(param0: number, param1: number, param2: number, param3: number): void;
			public static glSampleCoveragexOES(param0: number, param1: boolean): void;
			public static glScalexOES(param0: number, param1: number, param2: number): void;
			public static glTexEnvxOES(param0: number, param1: number, param2: number): void;
			public static glTexEnvxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glTexEnvxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glTexParameterxOES(param0: number, param1: number, param2: number): void;
			public static glTexParameterxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glTexParameterxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glTranslatexOES(param0: number, param1: number, param2: number): void;
			public static glIsRenderbufferOES(param0: number): boolean;
			public static glBindRenderbufferOES(param0: number, param1: number): void;
			public static glDeleteRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glDeleteRenderbuffersOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glGenRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glGenRenderbuffersOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glRenderbufferStorageOES(param0: number, param1: number, param2: number, param3: number): void;
			public static glGetRenderbufferParameterivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetRenderbufferParameterivOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glIsFramebufferOES(param0: number): boolean;
			public static glBindFramebufferOES(param0: number, param1: number): void;
			public static glDeleteFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glDeleteFramebuffersOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glGenFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glGenFramebuffersOES(param0: number, param1: java.nio.IntBuffer): void;
			public static glCheckFramebufferStatusOES(param0: number): number;
			public static glFramebufferRenderbufferOES(param0: number, param1: number, param2: number, param3: number): void;
			public static glFramebufferTexture2DOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
			public static glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: java.nio.IntBuffer): void;
			public static glGenerateMipmapOES(param0: number): void;
			public static glCurrentPaletteMatrixOES(param0: number): void;
			public static glLoadPaletteFromModelViewMatrixOES(): void;
			public static glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: java.nio.Buffer): void;
			public static glWeightPointerOES(param0: number, param1: number, param2: number, param3: java.nio.Buffer): void;
			public static glDepthRangefOES(param0: number, param1: number): void;
			public static glFrustumfOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static glOrthofOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static glClipPlanefOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glClipPlanefOES(param0: number, param1: java.nio.FloatBuffer): void;
			public static glGetClipPlanefOES(param0: number, param1: native.Array<number>, param2: number): void;
			public static glGetClipPlanefOES(param0: number, param1: java.nio.FloatBuffer): void;
			public static glClearDepthfOES(param0: number): void;
			public static glTexGenfOES(param0: number, param1: number, param2: number): void;
			public static glTexGenfvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glTexGenfvOES(param0: number, param1: number, param2: java.nio.FloatBuffer): void;
			public static glTexGeniOES(param0: number, param1: number, param2: number): void;
			public static glTexGenivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glTexGenivOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glTexGenxOES(param0: number, param1: number, param2: number): void;
			public static glTexGenxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glTexGenxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetTexGenfvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetTexGenfvOES(param0: number, param1: number, param2: java.nio.FloatBuffer): void;
			public static glGetTexGenivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetTexGenivOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetTexGenxvOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetTexGenxvOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static GL_3DC_XY_AMD: number;
			public static GL_3DC_X_AMD: number;
			public static GL_ATC_RGBA_EXPLICIT_ALPHA_AMD: number;
			public static GL_ATC_RGBA_INTERPOLATED_ALPHA_AMD: number;
			public static GL_ATC_RGB_AMD: number;
			public static GL_BGRA: number;
			public static GL_BLEND_DST_ALPHA_OES: number;
			public static GL_BLEND_DST_RGB_OES: number;
			public static GL_BLEND_EQUATION_ALPHA_OES: number;
			public static GL_BLEND_EQUATION_OES: number;
			public static GL_BLEND_EQUATION_RGB_OES: number;
			public static GL_BLEND_SRC_ALPHA_OES: number;
			public static GL_BLEND_SRC_RGB_OES: number;
			public static GL_BUFFER_ACCESS_OES: number;
			public static GL_BUFFER_MAPPED_OES: number;
			public static GL_BUFFER_MAP_POINTER_OES: number;
			public static GL_COLOR_ATTACHMENT0_OES: number;
			public static GL_CURRENT_PALETTE_MATRIX_OES: number;
			public static GL_DECR_WRAP_OES: number;
			public static GL_DEPTH24_STENCIL8_OES: number;
			public static GL_DEPTH_ATTACHMENT_OES: number;
			public static GL_DEPTH_COMPONENT16_OES: number;
			public static GL_DEPTH_COMPONENT24_OES: number;
			public static GL_DEPTH_COMPONENT32_OES: number;
			public static GL_DEPTH_STENCIL_OES: number;
			public static GL_ETC1_RGB8_OES: number;
			public static GL_FIXED_OES: number;
			public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME_OES: number;
			public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE_OES: number;
			public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE_OES: number;
			public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL_OES: number;
			public static GL_FRAMEBUFFER_BINDING_OES: number;
			public static GL_FRAMEBUFFER_COMPLETE_OES: number;
			public static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT_OES: number;
			public static GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS_OES: number;
			public static GL_FRAMEBUFFER_INCOMPLETE_FORMATS_OES: number;
			public static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_OES: number;
			public static GL_FRAMEBUFFER_OES: number;
			public static GL_FRAMEBUFFER_UNSUPPORTED_OES: number;
			public static GL_FUNC_ADD_OES: number;
			public static GL_FUNC_REVERSE_SUBTRACT_OES: number;
			public static GL_FUNC_SUBTRACT_OES: number;
			public static GL_INCR_WRAP_OES: number;
			public static GL_INVALID_FRAMEBUFFER_OPERATION_OES: number;
			public static GL_MATRIX_INDEX_ARRAY_BUFFER_BINDING_OES: number;
			public static GL_MATRIX_INDEX_ARRAY_OES: number;
			public static GL_MATRIX_INDEX_ARRAY_POINTER_OES: number;
			public static GL_MATRIX_INDEX_ARRAY_SIZE_OES: number;
			public static GL_MATRIX_INDEX_ARRAY_STRIDE_OES: number;
			public static GL_MATRIX_INDEX_ARRAY_TYPE_OES: number;
			public static GL_MATRIX_PALETTE_OES: number;
			public static GL_MAX_CUBE_MAP_TEXTURE_SIZE_OES: number;
			public static GL_MAX_PALETTE_MATRICES_OES: number;
			public static GL_MAX_RENDERBUFFER_SIZE_OES: number;
			public static GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
			public static GL_MAX_VERTEX_UNITS_OES: number;
			public static GL_MIRRORED_REPEAT_OES: number;
			public static GL_MODELVIEW_MATRIX_FLOAT_AS_INT_BITS_OES: number;
			public static GL_NONE_OES: number;
			public static GL_NORMAL_MAP_OES: number;
			public static GL_PROJECTION_MATRIX_FLOAT_AS_INT_BITS_OES: number;
			public static GL_REFLECTION_MAP_OES: number;
			public static GL_RENDERBUFFER_ALPHA_SIZE_OES: number;
			public static GL_RENDERBUFFER_BINDING_OES: number;
			public static GL_RENDERBUFFER_BLUE_SIZE_OES: number;
			public static GL_RENDERBUFFER_DEPTH_SIZE_OES: number;
			public static GL_RENDERBUFFER_GREEN_SIZE_OES: number;
			public static GL_RENDERBUFFER_HEIGHT_OES: number;
			public static GL_RENDERBUFFER_INTERNAL_FORMAT_OES: number;
			public static GL_RENDERBUFFER_OES: number;
			public static GL_RENDERBUFFER_RED_SIZE_OES: number;
			public static GL_RENDERBUFFER_STENCIL_SIZE_OES: number;
			public static GL_RENDERBUFFER_WIDTH_OES: number;
			public static GL_REQUIRED_TEXTURE_IMAGE_UNITS_OES: number;
			public static GL_RGB565_OES: number;
			public static GL_RGB5_A1_OES: number;
			public static GL_RGB8_OES: number;
			public static GL_RGBA4_OES: number;
			public static GL_RGBA8_OES: number;
			public static GL_SAMPLER_EXTERNAL_OES: number;
			public static GL_STENCIL_ATTACHMENT_OES: number;
			public static GL_STENCIL_INDEX1_OES: number;
			public static GL_STENCIL_INDEX4_OES: number;
			public static GL_STENCIL_INDEX8_OES: number;
			public static GL_TEXTURE_BINDING_CUBE_MAP_OES: number;
			public static GL_TEXTURE_BINDING_EXTERNAL_OES: number;
			public static GL_TEXTURE_CROP_RECT_OES: number;
			public static GL_TEXTURE_CUBE_MAP_NEGATIVE_X_OES: number;
			public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Y_OES: number;
			public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Z_OES: number;
			public static GL_TEXTURE_CUBE_MAP_OES: number;
			public static GL_TEXTURE_CUBE_MAP_POSITIVE_X_OES: number;
			public static GL_TEXTURE_CUBE_MAP_POSITIVE_Y_OES: number;
			public static GL_TEXTURE_CUBE_MAP_POSITIVE_Z_OES: number;
			public static GL_TEXTURE_EXTERNAL_OES: number;
			public static GL_TEXTURE_GEN_MODE_OES: number;
			public static GL_TEXTURE_GEN_STR_OES: number;
			public static GL_TEXTURE_MATRIX_FLOAT_AS_INT_BITS_OES: number;
			public static GL_TEXTURE_MAX_ANISOTROPY_EXT: number;
			public static GL_UNSIGNED_INT_24_8_OES: number;
			public static GL_WEIGHT_ARRAY_BUFFER_BINDING_OES: number;
			public static GL_WEIGHT_ARRAY_OES: number;
			public static GL_WEIGHT_ARRAY_POINTER_OES: number;
			public static GL_WEIGHT_ARRAY_SIZE_OES: number;
			public static GL_WEIGHT_ARRAY_STRIDE_OES: number;
			public static GL_WEIGHT_ARRAY_TYPE_OES: number;
			public static GL_WRITE_ONLY_OES: number;
		}
	}
}
