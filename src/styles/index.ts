import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#bfdbfe",
    marginTop: 2,
  },
  addButton: {
    backgroundColor: "white",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonDisabled: {
    backgroundColor: "#9ca3af",
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb",
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  statLabel: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
  productsList: {
    flex: 1,
    padding: 20,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#f3f4f6",
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#059669",
    marginBottom: 4,
  },
  productDate: {
    fontSize: 12,
    color: "#6b7280",
  },
  productActions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  actionButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  deleteButton: {
    borderLeftWidth: 1,
    borderLeftColor: "#f3f4f6",
  },
  editButtonText: {
    color: "#2563eb",
    fontWeight: "600",
  },
  deleteButtonText: {
    color: "#dc2626",
    fontWeight: "600",
  },
  emptyState: {
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6b7280",
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#9ca3af",
    marginBottom: 32,
    textAlign: "center",
  },
  emptyStateButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  emptyStateButtonText: {
    color: "white",
    fontWeight: "600",
  },
  notification: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    backgroundColor: "#dc2626",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  notificationTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  notificationText: {
    color: "white",
    fontSize: 14,
    flex: 1,
    marginLeft: 8,
  },
  notificationClose: {
    padding: 4,
  },
  notificationCloseText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  cancelButton: {
    color: "#6b7280",
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
  },
  saveButton: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "600",
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "white",
  },
  inputError: {
    borderColor: "#dc2626",
  },
  errorText: {
    color: "#dc2626",
    fontSize: 14,
    marginTop: 4,
  },
  imagePickerButton: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imagePlaceholder: {
    alignItems: "center",
  },
  imagePlaceholderText: {
    fontSize: 48,
    marginBottom: 8,
  },
  imagePlaceholderLabel: {
    fontSize: 16,
    color: "#6b7280",
  },
});

export default styles;