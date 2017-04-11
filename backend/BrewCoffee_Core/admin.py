from django.contrib import admin

# Register your models here.
from .models import Product, Review, ProductSize

class ProductAdmin(admin.ModelAdmin):
    pass

class ProductSizeAdmin(admin.ModelAdmin):
    pass

class ReviewAdmin(admin.ModelAdmin):
    pass

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductSize, ProductSizeAdmin)
admin.site.register(Review, ReviewAdmin)