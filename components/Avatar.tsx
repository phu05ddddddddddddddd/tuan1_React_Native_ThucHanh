import React from 'react';
import { Image, StyleSheet } from 'react-native';

type AvatarProps = {
  size?: number;
};

/**
 * Avatar
 * Ảnh đại diện sinh viên. Kích thước cố định (width/height bằng nhau)
 * và resizeMode="cover" để ảnh không bị méo dù nguồn ảnh có tỉ lệ khác.
 */
export default function Avatar({ size = 64 }: AvatarProps) {
  return (
    <Image
      source={require('../assets/avatar.png')}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
      resizeMode="cover"
      accessible={true}
      accessibilityRole="image"
      accessibilityLabel="Ảnh đại diện sinh viên"
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: '#93C5FD',
  },
});
