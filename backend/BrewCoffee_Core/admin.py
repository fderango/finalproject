from django.contrib import admin

# Register your models here.
from .models import Product, Review, ProductSize, Cart, CartProduct

class ProductAdmin(admin.ModelAdmin):
    pass

class ProductSizeAdmin(admin.ModelAdmin):
    pass

class ReviewAdmin(admin.ModelAdmin):
    pass

class CartAdmin(admin.ModelAdmin):
    pass

class CartProductAdmin(admin.ModelAdmin):
    pass


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductSize, ProductSizeAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(CartProduct,CartProductAdmin)
admin.site.register(Cart, CartAdmin)

