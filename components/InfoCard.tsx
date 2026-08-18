import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoRow from './InfoRow';

type InfoCardProps = {
  title: string;
  rows: { label: string; value: string }[];
};

/**
 * InfoCard
 * Thẻ hiển thị thông tin sinh viên (email, lớp, ...). Bọc nhiều InfoRow.
 */
export default function InfoCard({ title, rows }: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {rows.map((r) => (
        <InfoRow key={r.label} label={r.label} value={r.value} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EFF6FF',
    borderRadius: 10,
    padding: 14,
    marginTop: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E3A8A',
  },
});
