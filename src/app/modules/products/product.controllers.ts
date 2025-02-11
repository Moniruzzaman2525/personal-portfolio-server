import { NextFunction, Request, Response } from 'express';
import { ProductsServices } from './product.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Create a Stationery Product controller
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productData = req.body;
    const result = await ProductsServices.createProductIntoDB(productData);
    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Stationery Products controller
const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductsServices.getAllProductIntoDB(req.query);

    res.status(200).json({
      message: 'Products retrieved Successfully',
      success: true,
      meta: result.meta,
      data: result.result,
    });
  } catch (error) {
    next(error);
  }
};

// Get a Specific Stationery Product controller
const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;

    const result = await ProductsServices.getSingleIntoDB(productId);

    // product not found
    if (!result) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Update a Stationery Product controller
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const updateProduct = req.body;

    const result = await ProductsServices.updateProductIntoDB(
      updateProduct,
      productId,
    );

    // product not found
    if (!result) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
      return;
    }

    // update response
    res.status(200).json({
      message: 'Product updated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



// Delete a Stationery Product controller
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const userEmail = req.headers["user-email"] as string

    if (!userEmail) {
      res.status(400).json({
        message: "User email is required",
        success: false,
      });
      return
    }
    const result = await ProductsServices.deleteProductFromDB(productId, userEmail);

    if (!result) {
      res.status(404).json({
        message: "Product not found or you are not authorized to delete it",
        success: false,
      });
      return
    }

    res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};


const getUserProject = catchAsync(async (req, res) => {
  const query = req.query;
  const userEmail = req.headers["user-email"] as string;
  const result = await ProductsServices.getUserProject(query, userEmail);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

// export Stationery Product Controller
export const ProductsControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getUserProject
};
