/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />

declare module android {
	export module opengl {
		export class GLES31Ext {
			public static glBlendBarrierKHR(): void;
			public static glDebugMessageControlKHR(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>, param5: number, param6: boolean): void;
			public static glDebugMessageControlKHR(param0: number, param1: number, param2: number, param3: number, param4: java.nio.IntBuffer, param5: boolean): void;
			public static glDebugMessageInsertKHR(param0: number, param1: number, param2: number, param3: number, param4: string): void;
			public static glDebugMessageCallbackKHR(param0: android.opengl.GLES31Ext.DebugProcKHR): void;
			public static glGetDebugMessageLogKHR(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number, param6: native.Array<number>, param7: number, param8: native.Array<number>, param9: number, param10: native.Array<number>, param11: number, param12: native.Array<number>, param13: number): number;
			public static glGetDebugMessageLogKHR(param0: number, param1: java.nio.IntBuffer, param2: java.nio.IntBuffer, param3: java.nio.IntBuffer, param4: java.nio.IntBuffer, param5: java.nio.IntBuffer, param6: java.nio.ByteBuffer): number;
			public static glGetDebugMessageLogKHR(param0: number, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number): native.Array<string>;
			public static glGetDebugMessageLogKHR(param0: number, param1: java.nio.IntBuffer, param2: java.nio.IntBuffer, param3: java.nio.IntBuffer, param4: java.nio.IntBuffer): native.Array<string>;
			public static glPushDebugGroupKHR(param0: number, param1: number, param2: number, param3: string): void;
			public static glPopDebugGroupKHR(): void;
			public static glObjectLabelKHR(param0: number, param1: number, param2: number, param3: string): void;
			public static glGetObjectLabelKHR(param0: number, param1: number): string;
			public static glObjectPtrLabelKHR(param0: number, param1: string): void;
			public static glGetObjectPtrLabelKHR(param0: number): string;
			public static glGetDebugMessageCallbackKHR(): android.opengl.GLES31Ext.DebugProcKHR;
			public static glMinSampleShadingOES(param0: number): void;
			public static glTexStorage3DMultisampleOES(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean): void;
			public static glCopyImageSubDataEXT(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): void;
			public static glEnableiEXT(param0: number, param1: number): void;
			public static glDisableiEXT(param0: number, param1: number): void;
			public static glBlendEquationiEXT(param0: number, param1: number): void;
			public static glBlendEquationSeparateiEXT(param0: number, param1: number, param2: number): void;
			public static glBlendFunciEXT(param0: number, param1: number, param2: number): void;
			public static glBlendFuncSeparateiEXT(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static glColorMaskiEXT(param0: number, param1: boolean, param2: boolean, param3: boolean, param4: boolean): void;
			public static glIsEnablediEXT(param0: number, param1: number): boolean;
			public static glFramebufferTextureEXT(param0: number, param1: number, param2: number, param3: number): void;
			public static glPrimitiveBoundingBoxEXT(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public static glPatchParameteriEXT(param0: number, param1: number): void;
			public static glTexParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glTexParameterIivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glTexParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glTexParameterIuivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetTexParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetTexParameterIivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetTexParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetTexParameterIuivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glSamplerParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glSamplerParameterIivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glSamplerParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glSamplerParameterIuivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetSamplerParameterIivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetSamplerParameterIivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glGetSamplerParameterIuivEXT(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
			public static glGetSamplerParameterIuivEXT(param0: number, param1: number, param2: java.nio.IntBuffer): void;
			public static glTexBufferEXT(param0: number, param1: number, param2: number): void;
			public static glTexBufferRangeEXT(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public static GL_BLEND_ADVANCED_COHERENT_KHR: number;
			public static GL_BUFFER_KHR: number;
			public static GL_CLAMP_TO_BORDER_EXT: number;
			public static GL_COLORBURN_KHR: number;
			public static GL_COLORDODGE_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_10x10_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_10x5_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_10x6_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_10x8_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_12x10_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_12x12_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_4x4_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_5x4_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_5x5_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_6x5_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_6x6_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_8x5_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_8x6_KHR: number;
			public static GL_COMPRESSED_RGBA_ASTC_8x8_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: number;
			public static GL_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: number;
			public static GL_CONTEXT_FLAG_DEBUG_BIT_KHR: number;
			public static GL_DARKEN_KHR: number;
			public static GL_DEBUG_CALLBACK_FUNCTION_KHR: number;
			public static GL_DEBUG_CALLBACK_USER_PARAM_KHR: number;
			public static GL_DEBUG_GROUP_STACK_DEPTH_KHR: number;
			public static GL_DEBUG_LOGGED_MESSAGES_KHR: number;
			public static GL_DEBUG_NEXT_LOGGED_MESSAGE_LENGTH_KHR: number;
			public static GL_DEBUG_OUTPUT_KHR: number;
			public static GL_DEBUG_OUTPUT_SYNCHRONOUS_KHR: number;
			public static GL_DEBUG_SEVERITY_HIGH_KHR: number;
			public static GL_DEBUG_SEVERITY_LOW_KHR: number;
			public static GL_DEBUG_SEVERITY_MEDIUM_KHR: number;
			public static GL_DEBUG_SEVERITY_NOTIFICATION_KHR: number;
			public static GL_DEBUG_SOURCE_API_KHR: number;
			public static GL_DEBUG_SOURCE_APPLICATION_KHR: number;
			public static GL_DEBUG_SOURCE_OTHER_KHR: number;
			public static GL_DEBUG_SOURCE_SHADER_COMPILER_KHR: number;
			public static GL_DEBUG_SOURCE_THIRD_PARTY_KHR: number;
			public static GL_DEBUG_SOURCE_WINDOW_SYSTEM_KHR: number;
			public static GL_DEBUG_TYPE_DEPRECATED_BEHAVIOR_KHR: number;
			public static GL_DEBUG_TYPE_ERROR_KHR: number;
			public static GL_DEBUG_TYPE_MARKER_KHR: number;
			public static GL_DEBUG_TYPE_OTHER_KHR: number;
			public static GL_DEBUG_TYPE_PERFORMANCE_KHR: number;
			public static GL_DEBUG_TYPE_POP_GROUP_KHR: number;
			public static GL_DEBUG_TYPE_PORTABILITY_KHR: number;
			public static GL_DEBUG_TYPE_PUSH_GROUP_KHR: number;
			public static GL_DEBUG_TYPE_UNDEFINED_BEHAVIOR_KHR: number;
			public static GL_DECODE_EXT: number;
			public static GL_DIFFERENCE_KHR: number;
			public static GL_EXCLUSION_KHR: number;
			public static GL_FIRST_VERTEX_CONVENTION_EXT: number;
			public static GL_FRACTIONAL_EVEN_EXT: number;
			public static GL_FRACTIONAL_ODD_EXT: number;
			public static GL_FRAGMENT_INTERPOLATION_OFFSET_BITS_OES: number;
			public static GL_FRAMEBUFFER_ATTACHMENT_LAYERED_EXT: number;
			public static GL_FRAMEBUFFER_DEFAULT_LAYERS_EXT: number;
			public static GL_FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS_EXT: number;
			public static GL_GEOMETRY_LINKED_INPUT_TYPE_EXT: number;
			public static GL_GEOMETRY_LINKED_OUTPUT_TYPE_EXT: number;
			public static GL_GEOMETRY_LINKED_VERTICES_OUT_EXT: number;
			public static GL_GEOMETRY_SHADER_BIT_EXT: number;
			public static GL_GEOMETRY_SHADER_EXT: number;
			public static GL_GEOMETRY_SHADER_INVOCATIONS_EXT: number;
			public static GL_HARDLIGHT_KHR: number;
			public static GL_HSL_COLOR_KHR: number;
			public static GL_HSL_HUE_KHR: number;
			public static GL_HSL_LUMINOSITY_KHR: number;
			public static GL_HSL_SATURATION_KHR: number;
			public static GL_IMAGE_BUFFER_EXT: number;
			public static GL_IMAGE_CUBE_MAP_ARRAY_EXT: number;
			public static GL_INT_IMAGE_BUFFER_EXT: number;
			public static GL_INT_IMAGE_CUBE_MAP_ARRAY_EXT: number;
			public static GL_INT_SAMPLER_2D_MULTISAMPLE_ARRAY_OES: number;
			public static GL_INT_SAMPLER_BUFFER_EXT: number;
			public static GL_INT_SAMPLER_CUBE_MAP_ARRAY_EXT: number;
			public static GL_ISOLINES_EXT: number;
			public static GL_IS_PER_PATCH_EXT: number;
			public static GL_LAST_VERTEX_CONVENTION_EXT: number;
			public static GL_LAYER_PROVOKING_VERTEX_EXT: number;
			public static GL_LIGHTEN_KHR: number;
			public static GL_LINES_ADJACENCY_EXT: number;
			public static GL_LINE_STRIP_ADJACENCY_EXT: number;
			public static GL_MAX_COMBINED_GEOMETRY_UNIFORM_COMPONENTS_EXT: number;
			public static GL_MAX_COMBINED_TESS_CONTROL_UNIFORM_COMPONENTS_EXT: number;
			public static GL_MAX_COMBINED_TESS_EVALUATION_UNIFORM_COMPONENTS_EXT: number;
			public static GL_MAX_DEBUG_GROUP_STACK_DEPTH_KHR: number;
			public static GL_MAX_DEBUG_LOGGED_MESSAGES_KHR: number;
			public static GL_MAX_DEBUG_MESSAGE_LENGTH_KHR: number;
			public static GL_MAX_FRAGMENT_INTERPOLATION_OFFSET_OES: number;
			public static GL_MAX_FRAMEBUFFER_LAYERS_EXT: number;
			public static GL_MAX_GEOMETRY_ATOMIC_COUNTERS_EXT: number;
			public static GL_MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS_EXT: number;
			public static GL_MAX_GEOMETRY_IMAGE_UNIFORMS_EXT: number;
			public static GL_MAX_GEOMETRY_INPUT_COMPONENTS_EXT: number;
			public static GL_MAX_GEOMETRY_OUTPUT_COMPONENTS_EXT: number;
			public static GL_MAX_GEOMETRY_OUTPUT_VERTICES_EXT: number;
			public static GL_MAX_GEOMETRY_SHADER_INVOCATIONS_EXT: number;
			public static GL_MAX_GEOMETRY_SHADER_STORAGE_BLOCKS_EXT: number;
			public static GL_MAX_GEOMETRY_TEXTURE_IMAGE_UNITS_EXT: number;
			public static GL_MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS_EXT: number;
			public static GL_MAX_GEOMETRY_UNIFORM_BLOCKS_EXT: number;
			public static GL_MAX_GEOMETRY_UNIFORM_COMPONENTS_EXT: number;
			public static GL_MAX_LABEL_LENGTH_KHR: number;
			public static GL_MAX_PATCH_VERTICES_EXT: number;
			public static GL_MAX_TESS_CONTROL_ATOMIC_COUNTERS_EXT: number;
			public static GL_MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS_EXT: number;
			public static GL_MAX_TESS_CONTROL_IMAGE_UNIFORMS_EXT: number;
			public static GL_MAX_TESS_CONTROL_INPUT_COMPONENTS_EXT: number;
			public static GL_MAX_TESS_CONTROL_OUTPUT_COMPONENTS_EXT: number;
			public static GL_MAX_TESS_CONTROL_SHADER_STORAGE_BLOCKS_EXT: number;
			public static GL_MAX_TESS_CONTROL_TEXTURE_IMAGE_UNITS_EXT: number;
			public static GL_MAX_TESS_CONTROL_TOTAL_OUTPUT_COMPONENTS_EXT: number;
			public static GL_MAX_TESS_CONTROL_UNIFORM_BLOCKS_EXT: number;
			public static GL_MAX_TESS_CONTROL_UNIFORM_COMPONENTS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_ATOMIC_COUNTERS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_IMAGE_UNIFORMS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_INPUT_COMPONENTS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_OUTPUT_COMPONENTS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_SHADER_STORAGE_BLOCKS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_TEXTURE_IMAGE_UNITS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_UNIFORM_BLOCKS_EXT: number;
			public static GL_MAX_TESS_EVALUATION_UNIFORM_COMPONENTS_EXT: number;
			public static GL_MAX_TESS_GEN_LEVEL_EXT: number;
			public static GL_MAX_TESS_PATCH_COMPONENTS_EXT: number;
			public static GL_MAX_TEXTURE_BUFFER_SIZE_EXT: number;
			public static GL_MIN_FRAGMENT_INTERPOLATION_OFFSET_OES: number;
			public static GL_MIN_SAMPLE_SHADING_VALUE_OES: number;
			public static GL_MULTIPLY_KHR: number;
			public static GL_OVERLAY_KHR: number;
			public static GL_PATCHES_EXT: number;
			public static GL_PATCH_VERTICES_EXT: number;
			public static GL_PRIMITIVES_GENERATED_EXT: number;
			public static GL_PRIMITIVE_BOUNDING_BOX_EXT: number;
			public static GL_PRIMITIVE_RESTART_FOR_PATCHES_SUPPORTED: number;
			public static GL_PROGRAM_KHR: number;
			public static GL_QUADS_EXT: number;
			public static GL_QUERY_KHR: number;
			public static GL_REFERENCED_BY_GEOMETRY_SHADER_EXT: number;
			public static GL_REFERENCED_BY_TESS_CONTROL_SHADER_EXT: number;
			public static GL_REFERENCED_BY_TESS_EVALUATION_SHADER_EXT: number;
			public static GL_SAMPLER_2D_MULTISAMPLE_ARRAY_OES: number;
			public static GL_SAMPLER_BUFFER_EXT: number;
			public static GL_SAMPLER_CUBE_MAP_ARRAY_EXT: number;
			public static GL_SAMPLER_CUBE_MAP_ARRAY_SHADOW_EXT: number;
			public static GL_SAMPLER_KHR: number;
			public static GL_SAMPLE_SHADING_OES: number;
			public static GL_SCREEN_KHR: number;
			public static GL_SHADER_KHR: number;
			public static GL_SKIP_DECODE_EXT: number;
			public static GL_SOFTLIGHT_KHR: number;
			public static GL_STACK_OVERFLOW_KHR: number;
			public static GL_STACK_UNDERFLOW_KHR: number;
			public static GL_STENCIL_INDEX8_OES: number;
			public static GL_STENCIL_INDEX_OES: number;
			public static GL_TESS_CONTROL_OUTPUT_VERTICES_EXT: number;
			public static GL_TESS_CONTROL_SHADER_BIT_EXT: number;
			public static GL_TESS_CONTROL_SHADER_EXT: number;
			public static GL_TESS_EVALUATION_SHADER_BIT_EXT: number;
			public static GL_TESS_EVALUATION_SHADER_EXT: number;
			public static GL_TESS_GEN_MODE_EXT: number;
			public static GL_TESS_GEN_POINT_MODE_EXT: number;
			public static GL_TESS_GEN_SPACING_EXT: number;
			public static GL_TESS_GEN_VERTEX_ORDER_EXT: number;
			public static GL_TEXTURE_2D_MULTISAMPLE_ARRAY_OES: number;
			public static GL_TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY_OES: number;
			public static GL_TEXTURE_BINDING_BUFFER_EXT: number;
			public static GL_TEXTURE_BINDING_CUBE_MAP_ARRAY_EXT: number;
			public static GL_TEXTURE_BORDER_COLOR_EXT: number;
			public static GL_TEXTURE_BUFFER_BINDING_EXT: number;
			public static GL_TEXTURE_BUFFER_DATA_STORE_BINDING_EXT: number;
			public static GL_TEXTURE_BUFFER_EXT: number;
			public static GL_TEXTURE_BUFFER_OFFSET_ALIGNMENT_EXT: number;
			public static GL_TEXTURE_BUFFER_OFFSET_EXT: number;
			public static GL_TEXTURE_BUFFER_SIZE_EXT: number;
			public static GL_TEXTURE_CUBE_MAP_ARRAY_EXT: number;
			public static GL_TEXTURE_SRGB_DECODE_EXT: number;
			public static GL_TRIANGLES_ADJACENCY_EXT: number;
			public static GL_TRIANGLE_STRIP_ADJACENCY_EXT: number;
			public static GL_UNDEFINED_VERTEX_EXT: number;
			public static GL_UNSIGNED_INT_IMAGE_BUFFER_EXT: number;
			public static GL_UNSIGNED_INT_IMAGE_CUBE_MAP_ARRAY_EXT: number;
			public static GL_UNSIGNED_INT_SAMPLER_2D_MULTISAMPLE_ARRAY_OES: number;
			public static GL_UNSIGNED_INT_SAMPLER_BUFFER_EXT: number;
			public static GL_UNSIGNED_INT_SAMPLER_CUBE_MAP_ARRAY_EXT: number;
			public static GL_VERTEX_ARRAY_KHR: number;
		}
		export module GLES31Ext {
			export class DebugProcKHR {
				public onMessage(param0: number, param1: number, param2: number, param3: number, param4: string): void;
			}
		}
	}
}
