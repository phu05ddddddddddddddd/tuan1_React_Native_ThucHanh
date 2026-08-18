import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  accessibilityHint?: string;
};

/**
 * ActionButton
 * Nút hành động dùng Pressable, có đủ 3 trạng thái: bình thường, đang nhấn,
 * vô hiệu hóa. Phản hồi khi nhấn không chỉ dựa vào màu (còn co nhẹ + đổi
 * viền) để người dùng vẫn nhận biết được kể cả khi không phân biệt màu tốt.
 * Vùng chạm tối thiểu 48x48 nhờ minHeight/minWidth + hitSlop dự phòng.
 */
export default function ActionButton({
  label,
  onPress,
  disabled = false,
  variant = 'primary',
  accessibilityHint,
}: ActionButtonProps) {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.base,
        variant === 'primary' ? styles.primary : styles.secondary,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      {({ pressed }) => (
        <Text
          style={[
            styles.label,
            variant === 'primary' ? styles.labelPrimary : styles.labelSecondary,
            disabled && styles.labelDisabled,
            pressed && !disabled && styles.labelPressed,
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    minWidth: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: 'transparent',
  } as ViewStyle,
  primary: {
    backgroundColor: '#1D6FE0',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    borderColor: '#1D6FE0',
  },
  pressed: {
    transform: [{ scale: 0.97 }],
    borderColor: '#0F3E8A',
  },
  disabled: {
    backgroundColor: '#E5E7EB',
    borderColor: 'transparent',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  labelPrimary: {
    color: '#FFFFFF',
  },
  labelSecondary: {
    color: '#1D6FE0',
  },
  labelPressed: {
    textDecorationLine: 'underline',
  },
  labelDisabled: {
    color: '#9CA3AF',
  },
});
